# React-windowing

스크롤에 따라 화면에 들어오는 돔의 개수를 고정시키고 보이지 않는 부분은 지워주는 windowing과

지워진 돔의 높이를 계산해서 스크롤의 위치를 보정해주는 virtual scroll 구현하는 연습

# 실행

![ezgif-4-86e011434938](https://user-images.githubusercontent.com/45571631/141652735-34521e20-60bf-45ec-a5d9-8d6b29de5d04.gif)


# 기술

- CRA
- styled-components
- TypeScript


## 간단한 회고

프로젝트에 무한 스크롤을 도입하면서 좀 더 효율적인 렌더링을 위해 연습하기 위해 판 레포지토리인데..
생각보다 배운 것이 많다

### offset paging vs cursor paging

실시간으로 피드나 게시글이 올라오는 서비스라면 대부분의 경우 커서 페이징이 옳다
오프셋 페이징의 갯수를 기준으로 하기 때문에 유저가 페이지를 넘길 때 중복된 데이터를 보거나 
누락된 데이터를 받을 수 있는데 이 경우 새로고침하기 전까지 유저는 잘못되었는지 조차 알 수 없다

커서 페이징은 마지막 데이터를 기준으로 하기 때문에 백쪽에서 데이터베이스를 조회할 때도 효율이 좋다고한다 

### IntersectionObserver vs scroll event

처음에는 IntersectionObserver가 무조건 옳은 줄 알았는데..
아무리 살펴봐도 windowing을 적용하기에는 스크롤 이벤트 말고는 방법이 생각이 안났다
자주 사용되는 라이브러리인 virtualized 나 windowing도 스크롤 이벤트를 사용하고 있었다 
잘 쓰면 효율이 괜찮은 걸까?

### IntersectionObserver vs 다수의 IntersectionObserver

하나의 인스턴스로 모든 엘리먼트들을 관찰하며 옵저빙하는 것이 다수의 인스턴스로 각각 하나의 엘리먼트를 옵저빙하는 것 보다 효율이 좋다

다수의 인스턴스를 생성하여 엘리멘트들을 관찰하면 인스턴스 하나 마다 콜백을 가지고 있게 되고 그것이 초기 렌더링 성능에 이슈를 만든다

하나의 인스턴스는 하나의 콜백으로 엘리먼트들을 관찰하기 때문에 위와 같은 문제가 없다

