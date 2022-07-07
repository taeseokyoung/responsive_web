# responsive_web

**INDEX**  
-  
step01. responsive web 01  
- 반응형 기초, 모바일에서 버튼을 눌렀을 때 메뉴가 위에서 아래로 나온다.  
  
step02. responsive web 02 - float  
- float을 사용하여 가로로 배치.  
- 모바일에서 버튼이 나타나고 눌렀을 때 메뉴가 왼쪽에서 오른쪽으로 나오는 것처럼 보이도록 transition과 좌표값을 조정했다.  
- 햄버거버튼 플러그인 사용  
  
step03. responsive web 03 - float 2  
1. footer를 생각하시면서 만들어본 float 가로 배치  
2. 반응형으로 모바일에 갔을 때 텍스트와 그림의 위치 바꾸는 방법 실습.   
- nav li에 inline block으로 padding을 줬을 때 inline 특성상 중간에 픽셀이 생기기 때문에 부모ul에는 font-size 0, li에는 20px을 줘서 뜨는것을 삭제 > 아래에 뜨는 공간은 vertical-align:middle로 정리했다.  

step04. responsive web 04 - 다단메뉴 반응형  
- flex-direction row > column 전환.  
- position:absolute > static, width auto로 바꾼다.  
- smenu를 사라졌다 나타나게 display none block / opacity visivilty 두가지 방법으로 실습.  
- 버튼이 모바일 환경에서 나타나도록  
- 버튼을 눌렀을 때 'on'을 붙여서 메뉴가 나타난다. (left값 -100% <> 0)  
 - 이 메뉴의 크기를 width: calc(100% - 90px); 이렇게 줬다.  
- align-items와 justify-content를 적절히 사용했다.  



step05. responsive web 05 - 다단메뉴 반응형 2
slick 슬라이드 위에 header를 올리고 다단메뉴 반응형까지 실습.
- 화살표함수
<!-- $('.mbtn').on('click', () => ($('.gnb').toggleClass('on'), console.log('check'))) -->
- flex-wrap + flex-direction = flex-flow
- flex wrap 플랙스는 쪼그라들어있는데 안에내용때문에 늘어날 때 랩을 넘어가지 않도록 해준다


