# Chapter 03 SQL 기본 문법

## 03-1 기본 중에 기본 SELECT ~ FROM ~ WHERE

- SELECT 문의 기본 형식
```sql
 SELECT 속성명
	 FROM 테이블명
	 WHERE 조건식
	 GROUP BY 속성명
	 HAVING 조건식
	 ORDER BY 속성명
	 LIMIT 숫자
```

- 별칭(alias)
```sql
 SELECT addr 주소, debut_date "데뷔 일자"
 FROM member;
```

- 조건식 (WHERE)
	- 관계 연산자, 논리 연산자
	```sql
	 WHERE height >= 163 AND height <= 165;
	```
	- BETWEEN ~ AND
	```sql
	 WHERE height BETWEEN 163 AND 165;
	```
	- IN()
	```sql
	 WHERE addr = '경기' OR addr = '전남' OR addr = '경남';
	```
	```sql
	 WHERE addr IN('경기', '전남', '경남');
	```
	- LIKE : 문자열 검색
		-  % : '우'로 시작하는 모든 사람 검색
		```sql
		WHERE name LIKE '우%'
		```
		- _ : 한 글자와 매치
		```sql
		WHERE name LIKE '__핑크';
		```

- 서브 쿼리
	- SELECT 안에 또 다른 SELECT
	- name 이 '에이핑크'인 회원의 평균 키(height) 보다 큰 회원 검색
	```sql
	 SELECT name, height
	 FROM member
	 WHERE height > (SELECT height
					 FROM member
					 WHERE name = '에이핑크');
	```

## 03-2 좀 더 깊게 알아보는 SELECT 문

- ORDER BY : 결과가 출력되는 순서를 조절
	- 평균 키가 높고 (내림차순) , 데뷔 일자(debut_date)가 빠른 순서대로(오름차순) 출력
	```sql
	 SELECT name, height, debut_date
	 FROM member
	 WHERE height >= 164
	 ORDER BY height DESC, debut_date ASC;
	```
	- 오름차순 : DESC, 내림차순(기본값) : ASC
	- 반드시 WHERE 절 이후에 나와야 한다.

- LIMIT : 출력 개수 제한
	- LIMIT A, B : A번째부터 B건만 출력
	```sql
	 SELECT name
	 FROM member
	 LIMIT 0, 3;
	```

- DISTINCT : 중복 결과 제거
```sql
 SELECT DISTINCT addr
 FROM member;
```

- GROUP BY 절
	- 집계 함수 : SUM(),  AVG(), MIN(), MAX(), COUNT(), COUNT(DISTINCT)
	```sql
	 SELECT id "회원 아이디", SUM(amount) "총 구매 개수"
	 FROM buy
	 GROUP BY id;	
	```
	- Having 절
		- 집계 함수에 대해서 조건을 제한
		- 반드시 GROUP BY 절 다음에 등장
	```sql
	 SELECT id "회원 아이디", SUM(price*amount) "총 구매 금액"
	 FROM buy
	 GROUP BY id
	 HAVING SUM(price*amount) > 1000;
	```

## 03-3 데이터 변경을 위한 SQL 문

### 데이터 입력 : INSERT

- 기본 문법
```sql
 INSERT INTO 테이블명 [(열1, 열2, ...)] VALUES (값1, 값2, ...)
```
```sql
 CREATE TABLE hongong1 (toy_id INT, toy_name CHAR(4), age INT);
 INSERT INTO hongong1 VALUES (1, '우디', 25);
```

- AUTO_INCREMENT
	- 해당 속성을 부여하는 열은 반드시 PRIMARY KEY로 지정
	```sql
	 CREATE TABLE hongong2 (
		 id INT AUTO_INCREMENT PRIMARY KEY,
		 name CHAR(4),
		 age INT);
	```
	- 자동 증가 시작값 1000으로 설정, 3씩 증가하도록 설정
```sql
 ALTER TABLE hongong2 AUTO_INCREAMENT=100;
 SET @@auto_increment_increment=3;
 INSERT INTO hongong2 VALUES (NULL, '토마스', 20);
 INSERT INTO hongong2 VALUES (NULL, '제임스', 23);
 INSERT INTO hongong2 VALUES (NULL, '고든', 25);
```

- INSERT INTO ~ SELECT : 다른 테이블의 데이터를 한 번에 입력
	- SELECT 문의 열 개수는 INSERT할 테이블의 열 개수와 동일해야 한다.
	```sql
	INSERT INTO 테이블명 (열1, 열2, ...)
		SELECT 문 ;
	```
	```sql
	CREATE TABEL city_popul (city_name CHAR(35), population INT);

	INSERT INTO city_popul
		SELECT Name, Polulation
		FROM world.city;
	```

### 데이터 수정 : UPDATE

- 기본 문법
	```sql
	 UPDATE 테이블명
		 SET 열1=값1, 열2=값2, ...
		 WHERE 조건;
	```
	```sql
	 UPDATE city_popul
		 SET city_name = '뉴옥', population = 0
		 WHERE city_name = 'New York';
	```

### 데이터 삭제 : DELETE

- 기본 형식
	```sql
	 DELETE FROM 테이블명
		 WHERE 조건;
	```
	```sql
	 DELETE FROM city_popul
		 WHERE city_name LIKE 'NEW%';
		 LIMIT 5;
	```

# Chapter 04 SQL 고급 문법

## 04-1 MySQL의 데이터 형식

- 정수형 : TINYINT, SMALLINT, INT, BIGINT
- 문자형 : CHAR(개수), VARCHAR(개수)
- 대량의 데이터 형식
	- TEXT 형식 : TEXT, LONGTEXT
	- BLOB 형식 : BLOB, LONGBLOB
- 실수형 : FLOAT, DOUBLE
- 날짜형 : DATE, TIME, DATETIME

## 04-2 두 테이블을 묶는 조인


## 04-3 SQL 프로그래밍

# Chapter 05 테이블과 뷰

## 05-1 테이블 만들기

## 05-2 제약조건으로 테이블을 견고하게

## 05-3 가상의 테이블: 뷰

# Chapter 06 인덱스

## 06-1 인덱스 개념을 파악하자

## 06-2 인텍스의 내부 작동

## 06-3 인덱스의 실제 사용

# Chapter 07 스토어드 프로시저

## 07-1 스토어드 프로시저 사용 방법

## 07-2 스토어드 함수와 커서

## 07-3 자동 시행되는 트리거
