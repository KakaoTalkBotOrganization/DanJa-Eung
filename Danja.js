/** Extendable DanJa-Eung Library
 *      - DanJa-Eung.js 0.0.1-alpha2-hotfix
 *      - made by PICOPress
 * @param jsonInfo 이 매개변수로부터 DJEFactory를 설정합니다.
 */

function DJEFactory(jsonInfo){
    /*
    jsonInfo = {
        Integer(0) setEngine,
        JSON(registry) ImportData,
        boolean doWarning,
        boolean strictMode,
    }
    */

    //data
    let metaData = jsonInfo != undefined ? jsonInfo : {
        setEngine : 0,
        ImportData : { },
        doWarning : true,
        strictMode : false
    };

    let registry = { };
    let namereg = [ ];

    // to implement
    if(!Object.getOwnPropertyNames(this).includes("log")) { log = { }; log.i = console.log; log.e = console.log; }

    registry = metaData.ImportData != null ? metaData.ImportData : registry;

    if(metaData.setEngine === undefined) metaData.setEngine = 0;
    if(metaData.doWarning !== true && metaData.doWarning !== false) metaData.doWarning = true;
    if(metaData.strictMode !== true && metaData.strictMode !== false) metaData.strictMode = false;

    function Exception(msg) { log.e(msg); throw new Error("오류 : " + msg); }
    function Warning(msg) { if(metaData.doWarning) log.i("경고 : " + msg); }

    function Runtime(str){
        let cache = "";
        let buf = "";
        let crossMode = 0;
        let getNameMode = false;
        let argMode = false;
        let name = "";
        let argArr = [];
        let beforeCursor = '';
        let len = str.length;

        a : for(let i = 0; i < len; i ++) {
            let cursor = str[i];
            if(cursor == '[' && beforeCursor != '\\'){
                switch(crossMode){
                    case 0 : // [
                        crossMode = 1;
                        beforeCursor = '[';
                        continue a;

                    case 1 : // [
                        getNameMode = true;
                        crossMode = 2;
                        beforeCursor = '[';
                        continue a;
                }
            }else if(cursor == ']'){
                switch(crossMode){
                    case 2 : // ]
                        crossMode = 3;
                        if(getNameMode) Exception("태그의 이름이 비었습니다 [ 인덱스 : " + i + " ]");
                        beforeCursor = cursor;
                        if(buf != '')argArr.push(buf);
                        buf = '';
                        continue a;

                    case 3 : // ]
                        if(beforeCursor != ']') Exception("올바르지 않은 태그입니다. [ 인덱스 : " + i + " ]");
                        crossMode = 0;
                        let tmp = registry[name];
                        if(tmp[0] != argArr.length) metaData.strictMode ? Exception("등록된 태그와 처리된 매개변수의 길이가 일치하지 않습니다 [ 등록된 값 : " + tmp[0] + " , 처리된 값 : " + argArr.length + " ]") :
                                                                 Warning("등록된 태그와 처리된 매개변수의 길이가 일치하지 않습니다. 예기치 못한 오류를 일으킬 수 있습니다 [ 등록된 값 : " + tmp[0] + " , 처리된 값 : " + argArr.length + " ]");
                        let res = tmp[1].apply(null, argArr);
                        cache +=  res === undefined || res === null ? '' : res;
                        break;
                }
            }else{
                if(crossMode == 1){
                    cache += '[';
                    getNameMode = false;
                    crossMode = 0;
                    continue;
                }else if(crossMode == 2){
                    if(cursor == '|' && beforeCursor != '\\'){
                            if(getNameMode && !argMode){
                            if(buf == '') Exception("태그의 구분 문자가 비었습니다 [ 인덱스 : " + i + " ]");
                            if(!namereg.includes(buf)) Exception("태그의 구분 문자가 유효하지 않습니다 [ 인덱스 : " + i + " , 버퍼 값 : " + buf + " ]");
                            name = buf;
                            argMode = true;
                            getNameMode = false;
                            buf = '';
                            continue;
                        }else if(argMode && !getNameMode){
                            argArr.push(buf);
                            buf = "";
                            continue;
                        }else Exception("( 중지됨 ) 구문 분석 중 내부 환경이 충돌하였습니다 [ 인덱스 : " + i + " ]");
                    }
                    buf += cursor;
                    beforeCursor = cursor;
                    continue;
                }
                beforeCursor = cursor;
                cache += cursor;
            }
        }
        if(crossMode != 0)metaData.strictMode ? Exception("태그가 닫히지 않았습니다.") : Warning("태그가 닫히지 않았습니다.");
        return cache;
    }

    // public functions
    this.addTag = function(name, argLength, beInvokedFunction){
        if(namereg.includes(name)) return false;
        registry[name] = [argLength, beInvokedFunction];
        namereg.push(name);
        return true;
    }
    this.run = function(str) { return Runtime(str); }
}

module.exports.DJEFactory = DJEFactory;