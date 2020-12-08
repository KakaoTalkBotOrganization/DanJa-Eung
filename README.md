[예시코드보기](./test.js "코드 보기")

# DanJa-Eung 0.0.1-alpha3
**확장 가능한 단자응 개발 도구 - Extensible DanJa-Eung Development Kit**

- addTag (태그 이름, 인수로 받을 값의 개수, 호출될 함수) : 태그를 추가합니다.
- run (문자열) : 단자응 런타임을 실행하여 특정 결과를 반환합니다.
- removeTag(이름) : 태그를 메모리로부터 해체시킵니다.
- addTag(any...).addDoc(문서) : 해당 태그에 대한 문서를 제공합니다.
- getTagDoc(이름) : 문서를 불러옵니다.
- existTag(이름) : 태그에 대한 유효성 검사를 합니다.
- getTagList() : 모든 저장된 사용 가능한 태그를 출력합니다.

### 0.0.1-ahpha3 수정사항
- 여러 태그를 사용할 경우 생기던 문제 수정.
- 오류와 경고 메세지가 좀 더 상세해졌습니다.

### 0.0.1-ahpha3 추가된 기능
- getTagList, getTagDoc, existTag, removeTag, addDoc 추가함.
- 동적 태그 관리 시스템 도입. ( DTMS : Dynamic Tag Management System )
- 문서 기능 추가

### 예정된 기능
- 인스턴스에 즉시 할당할 수 있는 최적화된 단자응 전용 포맷
- 단자응을 더 쉽게 관리할 수 있는 명령줄 실행기
- 어디서나 사용 가능한 JAR ( Java Archive ) 배포판
- 더 강력하고 빠른 EXE 실행파일
- 프로그램의 흐름을 제어하는 유사 인터프리터

## 생성자의 매개변수에 들어가는 JSON
```js
jsonInfo = {
        Integer(0) setEngine,
        JSON(registry) ImportData, // - key : 특수문자를 제외한 유효한 문자, value : 크기가 2인 배열 (1 : 받을 인수의 개수, 2 : 실행할 함수)
        boolean doWarning, // - 경고 출력 여부
        boolean strictMode, // - 엄격하게 실행 할 여부
    }
```