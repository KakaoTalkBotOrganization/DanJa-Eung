# DanJa-Eung 0.0.1-alpha2-hotfix
**확장 가능한 단자응 개발 도구**

- addTag (태그 이름, 인수로 받을 값의 개수, 호출될 함수) : 태그를 추가합니다.
- run (문자열) : 단자응 런타임을 실행하여 특정 결과를 반환합니다.

### 0.0.1-ahpha2-hotfix 수정사항
- 인수를 재대로 처리하지 못하는 버그 수정
- 오류와 경고 메세지가 좀 더 상세해졌습니다.

### 0.0.1-ahpha2-hotfix 추가된 기능
- 생성자를 호출 할 때 받는 설정값의 property중 구현을 하지 않아도 자동으로 디폴트 값을 사용합니다.

## 생성자의 매개션수에 들어가는 JSON
```js
jsonInfo = {
        Integer(0) setEngine,
        JSON(registry) ImportData, // - key : 특수문자를 제외한 유효한 문자, value : 크기가 2인 배열 (1 : 받을 인수의 개수, 2 : 실행할 함수)
        boolean doWarning, // - 경고 출력 여부
        boolean strictMode, // - 엄격하게 실행 할 여부
    }
```