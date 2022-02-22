**<시퀀스 컨테이너>에는 vector, list, deque 등이 있다.<br>
map, set은 <연관 컨테이너> 이다.**

## map, set
* 공통점
    1. key를 기준으로 데이터를 정렬한다.
    2. key의 중복 저장 불가능하다.
    3. 탐색, 삽입, 삭제 시간복잡도 : O(logN)

* 차이점
    container|map|set
    :---|:---:|---:
    저장 원소|pair<key, value>|key

## multimap, multiset
key 중복이 가능한 map, set.

## unordered_set, unordered_map
원소들이 랜덤으로 정렬되어 저장된다.
검색, 삭제, 삽입 평균 시간복잡도 O(1), 하기만 최악의 경우 O(N).
