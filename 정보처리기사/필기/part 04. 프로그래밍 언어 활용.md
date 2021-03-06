# part 04. 프로그래밍 언어 활용

## chapter 01. 프로그래밍 언어 기초

### Section 01. 프로그램 언어와 번역

**01. 프로그램 언어의 개념**

**02. 저급 언어와 고급 언어**

**03. 원시 프로그램과 목적 프로그램**

**04. 언어 번역 프로그램**

**05. 프로그래밍 언어의 언어별 특성**

**06. 링커(Linker)**

**07. 로더(Loader)**

**08. 컴파일러(Compiler)**

### Section 02. 자료 객체

**01. 예약어(Reserved Word)**

**02. 변수와 상수**

**03. 배열(Array)**

**04. 포인터(Pointer)**

**05. 사용자 정의 자료형**

**06. 바인딩(Binding)**

## chapter 02. 프로그래밍 언어 활용

### Section 01. 알고리즘과 코딩

**01. 알고리즘**

**02. 코드의 품질 향상**

**03. C 언어 코드**

**04. C 언어의 기초**

**05. C 언어의 표준 입출력 함수**

### Section 02. C 언어의 연산자

**01. C 언어의 연산자 개념**

**02. C 언어의 연산자 종류**

### Section 03. C 언어의 제어문

**01. 선택문**

**02. 반복문**

### Section 04. C 언어의 고급 기법

**01. 배열(Array)의 사용**

**02. 배열의 선언과 초기화**

**03. 배열과 포인터**

**04. 기억 클래스(Storage Class)**

**05. 함수(Function)**

**06. 구조체(Structure)**

**07. 매크로(Macro)**

**08. 부 프로그램의 재귀적 호출**

### Section 05. 파이썬(Python)

**01. Python의 기초**

**02. Python의 연산자**

**03. Python의 배열과 리스트**

**04. Python의 제어문**

## chapter 03. 객체지향 기술

### Section 01. 객체지향 기술의 개념

**01. 객체지향(Object Oriented) 기술의 개념**

**02. 객체지향 기술의 구성 요소**

**03. 추상화와 상속**

### Section 02. 객체지향 개발 순서

**01. 객체지향 개발 순서**

**02. 객체지향 분석(OOA : Object Oriented Analysis)**
- 특징
    - 객체지향 분석은 문제 영역의 분석 대상을 형식적인 전략으로 기술하는 단계
    - 객체지향 분석은 사용자의 요구사항을 분석하여 요구되는 사항과 관련된 모든 객체, 클래스와 연관된 속성, 연산, 관계 등을 정의하여 모델링(Modeling)하는 작업
- 순서
- 객체지향 분석 방법론의 종류
    - Rambaugh(람바우) Method
        - 가장 대표적인 방법론
        - "객체 모형 -> 동적 모형 -> 기능 모형" 순으로 분석
    - E-R 다이어그램
    - Booch Method
    - Coad와 Yourdon Method
        - E-R 다이어그램을 사용하여 객체의 행위를 모델링
    - Jacobson Method
    - Wirfs-Brocks Method

**03. 객체지향 설계(OOD : Object Oriented Design)**

**04. 객체지향 프로그래밍(OOP : Object Oriented Programming)**

**05. 객체지향 테스트(Object Oriented Testing)**

### Section 03. 자바(Java) 언어

**01. Java와 객체의 개념**

**02. 클래스(Class)와 멤버**

**03. 클래스 선언과 객체 사용**

**04. 클래스의 상속**

**05. 생성자(Constructors)**

**06. 접근 지정자(접근 제어자)**

**07. 오버로딩과 오버라이딩**

**08. 추상 클래스(Abstract Class)**

**09. Java의 오류 처리**

### Section 04. UML 다이어그램

**01. UML(Unified Modeling Language) 다이어그램**
- 정의
    - 객체지향 소프트웨어 개발 과정에서 산출물을 가시성, 명세화, 문서화 할 때 사용되는 모델링 기술 방법론을 통합하여 만든 표준화된 범용 모델링 언어

**02. UML 다이어그램의 관계 표현**

**03. 분석 모델의 기술적 타당성 검토**

### Section 05. 디자인 패턴(Design Pattern)

**01. 디자인 패턴**
- 개념
    - 유사한 문제를 해결하기 위해 설계들을 분류하고 각 문제 유형별로 가장 적합한 설계를 일반화하여 체계적으로 정리해 놓은 것으로 소프트웨어 개발에서 효율성과 재사용성을 높일 수 있다.
- GoF 디자인 패턴
    - 23가지의 디자인 패턴을 정리하고 각각의 디자인 패턴을 생성(Creational), 구조(Structural), 행위(Behavioral) 3가지로 분류
- 분류
    - 생성(Creational) 패턴
        - 객체를 생성하는 데 사용되는 패턴
    - 구조(Structure) 패턴
        - 여러 개의 객체를 모아 구조화시키는 패턴
    - 행위(Behavioral) 패턴
        - 객체의 구체적인 알고리즘을 정의하는 패턴

**02. 디자인 패턴 종류 - 생성 패턴**
- Abstract Factory
    - 여러 개의 연관된 서브 클래스르 특정 그룹으로 묶어 한 번에 수정할 수 있도록 만든 패턴
- Factory Method
    - 객체를 만들어내는 공장을 만드는 패턴
- Builder
    - 생산 단계를 캡슐화하여 구축 공정을 동일하게 이용하도록 하는 패턴
- Prototype
    - 성능 향상을 위해 중복 객체를 생성하는 패턴
- Singleton
    - 한 클래스에 한 객체만 존재하도록 제한하는 패턴

**03. 디자인 패턴 종류 - 구조 패턴**
- Adaptor
    - 인터페이스로 인해 함께 사용하지 못하는 클래스를 함께 사용하도록 하는 패턴
- Bridge
    - 하나의 클래스 계층에 복잡하게 존재하는 기능 클래스와 구현 클래스를 분리하여, 두 개의 클래스를 연결하여 사용하는 것
- Composite
    - 개별 객체와 복합 객체를 클라이언트에서 동일하게 사용하도록 하는 패턴
- Decorator
    - 소스를 변경하지 않고 기능을 확장하도록 하는 패턴
- Facade
    - 복잡한 시스템을 구조화하여 쉽게 사용할 수 있도록 하는 패턴
- Flyweight
    - 대량의 작은 객체들을 공유하는 패턴
- Proxy
    - 객체의 대리자를 이용하여 다른 객체로의 접근을 통제하는 패턴
    - 대리 객체를 통해 원래 객체의 작업을 대신 수행하도록 한다.

**04. 디자인 패턴 종류 - 행위 패턴**
- Chain of Responsibility
    - 하나의 문제가 발생했을 경우 그 문제의 처리를 담당하는 여러 개의 처리기를 두고 순서대로 처리해 나가는 패턴
- Command
    - 여러 기능을 실행할 수 있도록 재사용성이 높은 클래스를 설계하는 패턴
- Interpreter
    - 간단한 언어의 문법을 정의하고 해석하는데 사용되는 패턴
- Iterator
    - 반복이 필요한 자료 구조를 모두 동일한 인터페이스를 통해 접근할 수 있도록 하는 패턴
- Mediator
    - 여러 객체 간의 통신 복잡성을 줄이기 위해 사용되는 패턴
- Memento
    - 객체의 상태를 저장해두었다가 복원해야 할 경우 사용하는 패턴
- Observer
    - 의존적이고 종속된 다른 객체들의 변화를 통지받고 자동으로 갱신해주는 패턴
- State
    - 규칙에 따라 객체의 상태를 변화시키면서 객체가 할 수 있는 행위를 바꾸는 패턴
- Strategy
    - 클래스별로 캡슐화되어 있는 객체들을 교체할 수 있도록 함으로써 같은 작업을 다른 알고리즘으로 사용할 수 있도록 하는 패턴
- Template Method
    - 작업의 일부분을 캡슐화해 전체 일을 수행하는 구조는 그대로 유지하면서 특정 부분을 바꾸는 패턴
- Visitor
    - 기존 객체의 구조를 수정하지 않고 새로운 기능을 추가할 수 있는 패턴

## chapter 04. 프로그램 개발 환경 구축

### Section 01. 프로그램 개발 환경

**01. 프로그램 개발 환경 준비**

**02. 프로그램 개발 도구 선정**

**03. 프로그램 개발 환경 구성**

### Section 02. 배치 프로그램

**01. 배치 프로그램**
- 개념
    - 사용자와의 상호 작용 없이 특정 작업을 작업 단위로 묶어 주기적으로 반복 수행해 보거나 정해진 규칙에 따라 일괄 처리하는 것

**02. 배치 스케줄러(Scheduler)**

## chapter 05. 명령어와 주소 지정

### Section 01. 명령어 수행 순서

**01. 명령어(Instruction)의 개념**

**02. 명령어 수행**

**03. 레지스터(Register)**

**04. 제어 장치(CU : Control Unit)**

**05. 시스템 버스(Bus)**

### Section 02. 명렁어 형식과 주소 지정

**01. 명령어(Instruction) 형식**

**02. 명령어 형식의 종류**

**03. 주소 지정 방식(Addressing Mode)**

## chapter 06. 운영체제

### Section 01. 운영체제의 개념

**01. 운영체제의 개념**

**02. 운영체제의 종류별 특징**

**03. 운영체제의 기본 명령어**

### Section 02. 프로세스 관리

**01. 프로세스(Process)**

**02. 프로세스 스케줄링(Process Scheduling)**

**03. 임계구역(Critical Section, 위험지구)**
- 정의
    - 다중 프로그래밍 기법에서 두 개 이상의 프로세스가 운영될 때 서로 공유하게 되는 자원(CPU, 메모리, 공유 변수, 디스크, 프린터, 파일, 기타 I/O 장치...). 임계구역으로 프로세스 간의 통신을 하는 매개 변수 역할을 할 수도 있다.

**04. 상호배제(Mutual Exclusion)**

**05. 세마포어(Semaphore)**
- 세마포어
    - E. J. Dijkstra가 제안한 방법으로 상호배제의 원리를 보장하는 알고리즘

**06. 모니터(Monitor)**
- 모니터
    - 세마포어를 실제 구현한 프로그램

**07. 교착상태(DeadLock)**
- 교착상태
    - 복수의 프로세스가 가능하지 못한 상태를 무한정 기다리고 있는 상태

### Section 03. 기억 장치 관리

**01. 기억 장치의 계층과 사용 방식**

**02. 주기억 장치 사용 방식**

**03. 가상 기억 장치 사용 방식**

**04. 주기억 장치 관리 전략**

### Section 04. 디스크 관리

**01. 디스크 구조와 접근 시간**

**02. 디스크 스케줄링**

**03. 하드 디스크(Hard Disk)**

**04. RAID(Redundant Array of Independent Disks)**

**05. 광디스크 시스템(Optical Disk System)**
- 광디스크 시스템
    - 빛의 반사나 굴절을 이용하여 자료를 읽어 내거나 기록할 수 있는 광 저장 매체, 드라이브 등 관련 장치 전부

### Section 05. 분산 운영체제

**01. MIMD(Multiple Instruction Multiple Data)**
- 다중 처리기(Multi-Processor)
    - 여러 개의 CPU가 하나의 메모리(기억 장소)를 공유
- 다중 컴퓨터(Multi-Computer)
    - 여러 개의 CPU가 독립적인 메모리를 사용
- Master/Slave 구조

**02. 분산 운영체제**
- 분산 운영체제 시스템
    - 목적
        - 각 컴퓨터가 자원을 최대한 공유
        - 여러 개의 컴퓨터가 협력하여 연산 속도를 향상

**03. 스레드(Thread)**
