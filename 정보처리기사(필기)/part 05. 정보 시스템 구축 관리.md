# part 05. 정보 시스템 구축 관리

## chapter 01. 정보 통신의 기초

### Section 01. 정보 통신

**01. 정보 통신**

**02. 통신 시스템의 구성 요소**

**03. 신호 변환기**

### Section 02. 데이터 전송의 기초

**01. 전송 모드**

**02. 네트워크 연결 형태**
- 점대점형(Point-to-Point type)
- 멀티포인트형(Multi-point type, Star형)
- 멀티드롭형(Multi-drop type, Bus형)
- 루프형(loop type, Ring 형)
- 망형(Mesh type)
- 트리형(Tree type)
- 교환 형(Switch type)

**03. 데이터 전송 코드**

## chapter 02. 데이터 전송 제어

### Section 01. 데이터 전송 제어

**01. 데이터 전송 제어**

**02. 오류 제어**

### Section 02. 회선 공유 기술

**01. 다중화기(Multiplexer)**
- 이해
    - 각 단말기에서 요구한 자원을 하나의 고속 통신 회선을 통하여 일정한 시간이나 주파수를 규칙적으로 나누어 사용하는 것, 각 단말기 입장에서는 컴퓨터의 자원을 혼자 사용하는 느낌을 갖게 된다.
- 특징
- 종류
    - 주파수 분할 다중화기(FDM : Frequency Division Multiplexing)
    - 시간 분할 다중화기(TDM : Time Division Multiplexing)
    - 코드 분할 다중화기(CMD : Code Division Multiplexing)
- 동기식 다중화기와 비동기식 다중화기
    - 동기식 시분할 다중화(STDM)
    - 비동기식 시분할 다중화(ATDM, 지능형, 확률적, 통계적 TDM)

**02. 집중화기(Concentrator)**
- 개념
    - 각 단말기에서 요구한 자원을 하나의 고속 통신 회선을 통하여 하나의 단말기만 사용할 수 있도록 제한
- 특징
- 예약 방식
- 경쟁 방식
- 순서적 할당(Round Robin) 방식

### Section 03. 통신망 기술

**01. 전용 회선과 교환 회선**

**02. 회선 교환 방식과 축적 교환 방식**

**03. 메시지 교환 방식과 패킷 교환 방식**

**04. 가상 회선 방식과 데이터 그램 방식**

**05. 패킷 스위칭**

**06. 서킷(Circuit) 스위칭**

**07. 경로 선택(Routing)**
- 개념
    - 데이터 패킷을 출발지에서 목적지까지 이용 가능한 전송로를 찾아본 후에 가장 효율적인 전송로를 선택하는 기술
- 전략
    - 고정 경로 선택(착국 부호 방식)
    - 범람 경로 선택(Flooding)
    - 적응적(Adaptive) 경로 선택
- 라우팅(경로 선택) 프로토콜
    - 정적 라우팅(Static Routing)
        - 사람이 직접 경로를 입력하는 수동식 방법
    - 동적 라우팅(Dynamic Routing)
        - 라우터 장비가 자동으로 라우팅 테이블을 갱신하여 경로를 결정
    - IGP(Interior Gateway Protocol, 내부 라우팅 프로토콜)
    - EGP(Exterior Gateway Protocol, 외부 라우팅 프로토콜)
    - Distance Vector
        - 라우팅 테이블에 목적지까지 진행하는 경로를 필요한 거리와 방향만을 기록하는 방식
    - Link State
        - 모든 라우팅 테이블에 목적지까지 진행하는 경로를 SPF 알고리즘으로 기록하는 방식
    - RIP(Routing Information Protocol)
        - 매트릭을 이용하여 홉카운트를 계산
    - IGRP(Internet Gateway Routing Protocol)
        - 미국의 시스코(COSCO) 시스템 회사의 고유한 프로토콜
    - EIGPR(Enhanced IGRP)
    - OSPF(Open Shortest Path First)
    - BGP(Border Gateway Protocol)

**08. 트래픽 제어(Traffic Control)**
- 흐름 제어(Flow Control)
    - 흐름 제어
        - 패킷 교환 방식에서 통신망 내의 트래픽 제어의 원활한 흐름을 위해 네트워크 내의 노드(컴퓨터 혹은 교환기)와 노드 사이에 전송하는 패킷의 양이나 속도를 규제하는 기술
    - Choke Packet
        - 수신측에서 송신츨에 전송하는 전송 지연 신호로 송신측의 데이터 전송 속도를 조절하는 방법
    - 슬라이딩 윈도(Sliding window)
        - 송신측에서는 수신측으로부터 전송할 프레임의 개수(윈도 크기)를 미리 지정받는다.
        - 프레임의 개수가 증가하거나 감소하게 되는데 수신측으로부터 이전에 송신한 프레임에 대한 긍정적인 응답이 왔을 때만 프레임의 개수가 증가하게 된다.
- 체증 제어(Congestion Control)
    - 네트워크상에 패킷 수를 조절하는 기술로 각 노드의 패킷 수신 버퍼를 한계점 이하로 사용하도록 조절
- 교착 상태(Dead-Lock)
    - 노드 간의 패킷을 기억할 수 있는 버퍼나 디스크의 용량이 넘쳐 패킷을 전송할 수 없는 상태
- 락업(Lock-UP)
    - 교착 상태가 발전되어 모든 패킷의 흐름과 교환기가 정지 상태가 되는 상태, 인터넷 대란이라고도 한다.

**09. 네트워크 장비 유형**
- 허브(Hub)
    - 여러 대의 컴퓨터를 연결하여 네트워크로 보내거나 하나의 네트워크로 수신된 정보를 여러 대의 컴퓨터로 송신하기 위한 장비
- 리피터(Repeater)
    - 디지털 신호를 증폭시켜 주는 역할을 하여 신호가 약해지지 않고 컴퓨터로 수신되도록 한다.
- 브리지(Bridge)
    - 두 개의 근거리 통신망(LAN)을 서로 연결해 주는 통신망 연결 장치
- 스위치(Switch)
    - MAC 주소 테이블을 이용하여 목적지 MAC 주소를 가진 장비 측 포트로만 프레임을 전송하는 역할
- 라우터(Router)
    - LAN과 LAN을 연결하거나 LAN과 WAN을 연결하기 위한 인터넷 네트워킹 장비
- 게이트웨이(Gateway)
    - 프로토콜을 서로 다른 통신망에 접속할 수 있게 해 주는 장치

## chapter 03. 통신 프로토콜

### Section 01. 통신 프로토콜(Protocol)

**01. 통신 프로토콜**
- 개념
- 구조
- OSI 7계층의 기능
    - ① 물리 계층(Physical Layer)
    - ② 데이터 링크 계층(Data Link Layer)
        - 오류와 흐름을 제거하여 신뢰성 있는 데이터를 전송
    - ③ 네트워크 계층(Network Layer, 망 계층)
        - 통신 시스템 간의 경로 선택 및 통신 트래픽의 흐름을 제어하는 기능
        - 다수의 중개 시스템 중 올바른 경로를 선택하도록 지원
    - ④ 전송 계층(Transport Layer)
        - 두 종단(End-to-End)간에 신뢰성 있고 효율적인 데이터를 전송하기 위해 오류 검출과 복구, 흐름 제어를 수행
    - ⑤ 세션 계층(Session Layer)
    - ⑥ 표현 계층(Presentation Layer)
    - ⑦ 응용 계층(Application Layer)

### Section 02. 인터넷 프로토콜(TCP/IP)

**01. TCP/IP 프로토콜**
- 개념
    - TCP/IP는 TCP와 IP 프로토콜만을 지칭하는 것이 아니라 UDP, ICMP, ARP, RARP 등 관련된 프로토콜을 통칭
    - TCP와 UDP로 구분되는 프로토콜은 트랜스포트 계층에서 응용 계층과 인터넷 계층 사이의 통신을 담당
    - TCP와 UDP의 가장 큰 차이점은 데이터 전송의 신뢰성 (TCP > UDP)

**02. TCP/IP의 응용 계층(인터넷 서비스)**
- 전자우편(E-메일)
    - 개념
    - SMTP(Simple Mail Transfer Protocol)
    - POP3(Post Office Protocol 3)
    - MIME(Multipurpose Internet Mail Extensions)
    - IMAP(Internet Messaging Access Protocol)
- HTTP 서비스
- FTP(File Transfer Protocol) 서비스
    - 개념
        - 인터넷에서 파일을 전송하기 위한 프로토콜
- Telnet 서비스
    - 원격지에 있는 컴퓨터에 권한을 가진 사용자가 접속하여 프로그램을 실행하거나 시스템 관리 작업을 할 수 있는 인터넷 서비스
    - 가상 터미널(Virtual Terminal) 기능을 갖는다.
- 유즈넷(UseNet) 서비스
    - 다수의 사용자가 각 분야별로 공지사항 및 최신 정보를 제공해주는 서비스
- Gopher 서비스
    - 인터넷의 문헌 자료 데이터베이스 서비스 프로토콜
- Archie 서비스
    - FTP 지원 서비스로 HOST를 검색하는 서비스 프로토콜
- WAIS 서비스
    - 인터넷에 흩어져 있는 여러 곳의 데이터베이스로부터 데이터를 검색할 수 있는 서비스
- 핑커(Finger)
    - 특정 시스템을 사용하고 있는 사용자의 정보를 알아보기 위한 서비스
- IRC(Internet Relay Chat)
    - 인터넷을 통해 채팅할 수 있도록 하는 서비스
- WWW와 웹 브라우저
    - WWW(World Wide Web)
        - 각각의 컴퓨터가 모여서 전 세계에 걸쳐 네트워크로 연결된 상태
    - 웹 브라우저(Web Browser)
        - 웹(WWW) 서비스를 이용할 수 있게 하는 프로그램으로 HTML로 서술된 하이퍼텍스트를 받아서 보여주는 프로그램

**03. TCP 계층**
- TCP(Transmission Control Protocol)
    - 연결형
- UDP(User Datagram Protocol)
    - 비연결형
- SNMP(Simple Network Management Protocol)
- RTP(Real Time transport Protocol)

**04. IP 계층**
- IP(Internet Protocol)
    - 비연결형
- ARP(Address Resolution Protocol)
    - 호스트의 IP 주소를 호스트와 연결된 네트워크 접속 장치의 물리적인 주소(LAN Card 주소)로 번역해주는 프로토콜
- RARP(Reverse Address Resolution Protocol)
- ICMP(Internet Control Message Protocol)
    - IP 패킷을 처리할 때 발생하는 문제를 알려주는 프로토콜
    - 호스트나 라우터의 오류 상태 통지 및 예상치 못한 상황에 대한 정보를 제공할 수 있게 하는 인터넷 프로토콜
- DNS(Domain Name Server)

**05. IPv4 주소**
- 개념
- 형식
    - 32비트 IP 주소 체계

**06. IPv6 주소**
- 개념
- 형식
    - 128비트

### Section 03. 신기술 동향

**01. 신기술 동향**
- 블루투스(Bluetooth)
- 유비쿼터스(Ubiquitous)
- Wibro(Wireless Broadband Internet)
- VoIP(Voice over Internet Protocol)
- RFID(Radio Frequency IDentification)
- WIPI(Wireless Internet Platform for Interoperability)
- 와이파이(Wi-Fi : Wireless Fidelity)
- 미러 사이트(Mirror Site)
- 키오스크(Kiosk)
- 데이터웨어하우스(DataWarehouse)
- WAP(Wireless Application Protocol)
- 디지털 트윈(Digital Twin)
- Mesh Network
- 웨어러블 컴퓨팅(Wearable computing)
- 증강 현실(Augmented reality)
- NFC(Near Field Communication)
- VPN(Virtual Private Network)
- Mashup
- 비콘(Beacon)
- 포스퀘어(Foursquare)
- 멤리스터(Memristor)

**02. PICONET**
- 개념
    - 여러 개의 독립된 통신 장치가 UWB 기술 또는 블루투스 기술을 사용하여 통신망을 형성하는 무선 네트워크를 구축하는 기술

**03. 클라우드 컴퓨팅**
- 개념
    - 컴퓨터, 휴대폰과 같은 기기를 이용해 언제 어디서나 연결하여 서비스를 사용하는 컴퓨팅 스타일
    - 자신의 컴퓨터에서 사용하는 모든 프로그램이나 데이터를 자신의 컴퓨터가 아닌 인터넷으로 연결된 다른 컴퓨터로 처리하는 기술
- 유형
    - SaaS(Software as a Service)
    - IaaS(Infrastrcuture as a Service)
- SDDC(Software Defined Data Center)
    - 모든 인프라가 가상화되는 데이터센터

## chapter 04. 시스템 보안 구축

### Section 01. 정보보호

**01. 정보보호**
- 개념
- 기본 요소 및 목적
    - 기밀성(Confidentiality, 비밀성)
    - 무결성(Integrity)
    - 가용성(Availability)
    - 책임성(Accountability)
    - 인증성(Authenticity)

**02. 소프트웨어 개발 보안**

**03. 소프트웨어 개발 보안 구현**

**04. 소프트웨어 개발 보안 테스트**

### Section 02. 시스템 보안

**01. 시스템 보안**

**02. 시스템 보안 범위**

### Section 03. 시스템 보안 설계와 구현

**01. 시스템 보안 설계**

**02. 시스템 보안 구현**

**03. 시스템 인증**

**04. 접근 통제 보안 정책**
- DAC(Discretionary Access Control, 임의 접근 통제) 정책
    - 가장 널리 사용되는 모델로 오늘날 대부분 운영체제에서 채택하여 사용
    - 사용자의 신원 정보를 통해 권한의 부여 및 회수에 대한 메커니즘을 기반
- MAC(Mandatory Access Control, 강제적 접근 통제) 정책
    - 시스템의 사용자들은 자신의 정보에 대한 어떠한 접근 권한도 설정할 수 없다.
- RBAC(Role-Basec Access Control, 역할 기반 접근 통제) 정책
    - 특정 역할들을 정의하고 각 역할에 따라 접근 권한을 지정하고 제어하는 방식
- MAC(Multi-level Access Control, 다중 등급 접근 통제) 정책

**05. 재해 복구 시스템 복구 수준별 유형**
- 미러 사이트(Mirror Site)
- 핫 사이트(Hot Site)
- 웜 사이트(Warm Site)
- 콜드 사이트(Cold Site)

**06. 접근 제어 기법과 자원 보호 기법**

**07. 시스템 보안 구현**

## chapter 05. 보안 공격 및 예방

### Section 01. 위험 관리

**01. 위험 관리**

**02. 위협 요소**

**03. 취약점 분석**

### Section 02. 악성 프로그램

**01. 컴퓨터 바이러스(Virus)**

**02. 악성 프로그램**
- 트랩 도어(Trap Door)
    - 백도어(Back Door)가 악용되면 트랩 도어라고 한다.
- 트로이 목마(Trojan Horse)
    - 정상적인 프로그램으로 가장한 악성 프로그램
- 웜(Worm)
- 스턱스넷(Stuxnet)
- 스파이웨어(Spyware)
- 조크(Joke)와 혹스(Hoax)
- 악성 스크립트(Malicious Script)
- 루트킷(Rootkit)
    - 루트 권한을 획득한 공격자가 해커용 프로그램을 숨기기 위한 목적으로 사용되는 프로그램
- 봇넷(Botnet)
    - 공격자는 사용자의 컴퓨터를 좀비라고도 하는 봇 상태로 바꿀 수 있는 악성 소프트웨어를 유포
- 오토런 바이러스(Autorun Virus)
- 악성 에이전트(Agent)
    - TCP/IP에서 네크워크 관리를 위해 지원하는 SNMP 프로토콜을 이용한 악성 프로그램

**03. 전형적인 공격 유형**

**04. 네트워크 공격 기술**
- Spoofing(스푸핑)
    - 자신을 타인이나 다른 시스템에 속이는 행위를 의미하며 침입하고자 하는 호스트의 IP 주소를 바꾸어 해킹하는 기법
- Sniffing(스니핑)
    - 엿보기, 통신망상에 전송되는 패킷 정보를 몰래 읽어 보는 것
- DoS(Denial of Service, 서비스 거부)
    - 정보 시스템의 데이터나 자원을 정당한 사용자가 적절히 대기 시간 내 사용을 방해하는 행위
- DDoS(분산 DoS) 공격
    - 여러 대의 공격자가 컴퓨터를 분산 배치하여 동시에 동작하게 함으로써 시스템이 더 이상 정상적 서비스를 제공할 수 없도록 만드는 해킹 방식 중 하나
    - 처리할 수 없을 정도로 엄청난 분량의 패킷을 동시에 범람시킴으로써 네트워크의 성능을 저하시키거나 시스템을 마비시킨다.
- Ping of Death 공격
- SYN Flooding 공격
- Smurf Attack(Smurfing)
- Trinoo 공격
- 피싱(Phishing)
    - 개인정보와 낚시의 합성어, 정상 웹 서버를 해킹하여 위장 사이트를 만들어 놓고 네티즌들이 프로그램을 내려받도록 하거나 E-메일을 이용하여 개인정보를 빼내어 범죄에 악용하는 행위
- War Driving
- Land Attack
- Session Hijacking
- 스미싱(Smishing)
    - 문자 메시지(SMS)와 피싱(Phishing)의 합성어, '무료쿠폰 제공', '초대장' 등을 내용으로 하는 문자메시지 내에 인터넷 주소를 보낸다
- 크래킹(Cracking)
    - 해킹과 비슷한 의미로 사용
    - 해킹은 시스템의 취약점을 찾아내 취약점을 보완하는 것, 크래킹은 시스템의 취약점을 찾아 피해를 주는 행위
- 누킹(Nuking)
    - 짧은 순간 폭발적인 데미지(Damage)를 가하는 행위
- 액티브 컨텐츠 공격
- Trojan Horse(트로이잔 목마) 공격
    - 일반 사용자에게 특정 E-메일을 수신하게 하여 좀비 PC등을 만드는 형태의 공격 방법
- 버퍼 오버플로우 공격
- Stack overflow 공격
- 메일용 쉘 스크립트 공격
- Race Condition 공격
- 비동기성 공격(Asynchronous Attacks)
- 은닉 채널(Convert Channel, 비밀 통로)
- FTP 바운스 공격(FTP Bounce Attack)
- Honey-pot System
- Key Logger Attack
- 블루스나프(BlueSnarf)
- 패킷의 순서 변조 공격
- 블루재킹(BlueJacking)
- 비트 플리핑(Bit Flipping) 공격
- 에러 메시지 이용 공격
- Targa 공격
- 랜섬웨어(Randsomware)
- 하트블리드(Heart Bleed, 치명적 심장 출혈)
- 백오리피스(backorifice)
- ICMP Redirect 공격
- DRDoS 공격
- ASLR(Address Space Layout Randomization)
- No-eXecute(NX, 실행 방지) 비트
- Slowloris(Slow HTTP Header DoS)
- KRACK(Key Reinstallation AttaCKs, 키 재설치 공격)
- Grayware(그레이웨어)
- TFN(Tribe Flood Network) 공격

### Section 03. 정보보호 대책

**01. IPS 개념**
- 침입 차단 시스템(IPS : Intrusion Prevention System)의 정의
    - 일반적으로 방화벽(Firewall)을 의미

**02. IPS의 기본 시스템**

**03. IPS의 세대별 방식**

**04. IPS의 구축 방식**

**05. IDS의 개념**
- IDS(Intrusion Detection System, 침입 탐지 시스템)의 정의
    - 네트워크에서 허가되지 않은 비정상적인 행동을 탐지하고, 불법적인 행위와 침입 여부를 확인한 후, 이에 대응할 수 있는 기능을 가진 보안 시스템

**06. HIDS와 NIDS**
- 호스트 기반의 침입 탐지 시스템 (HIDS : Host IDS)
    - IDS가 컴퓨터 시스템(Host) 내부에 설치되어 컴퓨터 내부 사용자들의 활동을 감시하고 해킹을 탐지하는 보안 시스템

- 네트워크 기반의 침입 탐지 시스템(NIDS : Network IDS)
    - 네트워크를 경유하는 패킷들을 분석하여 해킹을 탐지하는 네트워크 보안 시스템

**07. 침입 탐지 모델에 의한 구분**

**08. 백도어 탐지 기법 및 대응**
- 특징
    - 시스템 접근에 대한 사용자 인증을 거치지 않고, 응용 프로그램 또는 시스템에 접근할 수 있도록 하는 조치
- 탐지 기법
    - 동작 중인 프로세스와 열린 포트 확인
    - SetUID 파일 검사
    - 백도어 탐지 도구 사용
    - 무결성 검사
    - 로그 분석

## chapter 06. 암호 기술

### Section 01. 암호 기술

**01. 암호 기술**
- 정보가 갖추어야 할 기능
    - 기밀성(Secrecy, Confidentiality)
    - 무결성(Integrity)
    - 가용성(Availability)
    - 부인봉쇄(Non-repudiation)

**02. 암호 시스템의 분류**

**03. 대칭키 암호와 공개키 암호**

### Section 02. 블록 암호와 스트림 암호

**01. 블록 암호**
- 특징
    - 평문을 일정한 단위(블록)로 나누어서 단위마다 암호화 과정을 수행하여 암호문을 얻는 방법

**02. DES 알고리즘**

**03. 기타 블록 암호**
- SEED-128, SEED-256
- ARIA
- AES-128, AES-192, AES-256
- IDEA(International Data Encryption Algorithm) - Feistel 암호 구조
- CAST-128/256 - Feistel 암호 구조
- 블로피시(Blowfish) - Feistel 암호 구조
- SAFER - SPN 암호 구조
- CRYPTON - SPN 암호 구조
- HIGHT(HIGh security and light weighHT) 암호 - Feistel 변경 구조
- A5/1, A5/2, A5/3
- ECC(Elliptic Curve Crypto, 타원곡선암호)
- Skipjack 암호

**04. 스트림 암호**
- 스트림 암호
    -  평문을 비트 혹은 바이트 단위로 암호화
-  동기식(Synchronous) 스트림 암호
-  비동기식(Asynchronous) 스트림 암호

### Section 03. 전자서명

**01. 전자서명과 디지털 서명**
- 전자서명(Electronic Signature)의 개념
    - 서명자를 확인하고 서명자가 전자문서에 서명하였음을 나타내는 데 이용하기 위하여 전자문서에 첨부되거나 논리적으로 결합된 전자적 형태의 정보
- 디지털 서명(Digital Signature)의 개념
    - 전자문서나 메시지를 보낸 사람의 신원이 진짜임을 증명하기 위해 디지털 형태로 생성하여 첨부하는 정보를 지칭

**02. 디지털 서명 알고리즘**
- RSA 디지털 서명
- ELGamal 디지털 서명
- DSS(Digital Signature Standard, 디지털 서명의 표준)
- DSA(Digital Signature Algorithm)
- Rabin 공개키 암호
- Diffie-Hellman 공개키 키 공유 알고리즘
- 소수 판정 알고리즘
- McEliece 공개키 암호 알고리즘
- 배낭(Knapsack) 공개키 암호 알고리즘
- 

**03. 무선 PKI**
- 무선 PKI(무선 공개키 기반 구조, W-PKI, Wireless PKI)
- M-VPN(모바일 가상 LAN, Mobile VPN)
- WEP(Wired Equivalent Privacy)
- WPA(Wi-Fi Protected Access)

### Section 04. 네트워크 보안 기술

**01. SSL**
- SSL(Secure Socket Layer)
    - 웹 서버와 웹 브라우저에서 전달되는 데이터를 안전하게 송수신 할 수 있도록 미국의 넷스케이프사가 개발한 프로토콜

**02. IPSec**
- IPSec(IP Security)
    - IP 패킷의 보안 프로토콜로 패킷을 제거하거나 삽입을 불가능하게 하는 보안 기술

**03. S-HTTP**
- S-HTTP(Secure-HyperText Transfer Protocol)
- 1994년 Rescorla와 Schiffman에 의해 개발된 HTTP 프로토콜의 확장 개념
- HTTP에 보안 기능을 부가하기 위한 통신 규약으로 WWW를 이용할 때 웹 페이지의 데이터를 안전하게 주고받을 수 있게 만든 프로토콜

**04. S/MIME**
- S/MIME(Secure/Multipurpose Internet Mail Extension)

### Section 05. 인터페이스 보안

**01. 인터페이스 보안**

**02. 데이터베이스 보안**
- 데이터베이스의 암호화 알고리즘
    - 대칭 키 암호 알고리즘 : ARIA 128/192/256, SEED
    - 해시 알고리즘 : SHA -256/384/512, HAS-160
    - 비대칭 키 알고리즘 : RSA, ECDSA

### Section 06. 정보 추적 기술

**01. DRM(Digital Rights Management)**
- 개념
    - 디지털 저작권 관리

**02. 워터마킹**
- 워터마킹(Watermarking)
    - 위조지폐를 구분하기 위해서 사용한 기술에서 유래된 용어로 현재는 지적 재산권을 보호하기 위해 사용된다

**03. 핑커프린팅**
- 핑커프린팅(Fingerprinting)
    -   디지털 콘텐츠를 구매할 때 구매자의 정보를 삽입하여 불법 배포 발견 시 최초의 배포자를 추적할 수 있게 하는 기술

**04. 디지털 포렌식**
- 디지털 포렌식(Digital Forensic)
    - 컴퓨터나 스마트폰, 각종 디지털기기 등에 저장 장치나 인터넷상에 남아 있는 각종 디지털 정보(통화기록, 접속 기록, E-메일 등)를 분석해 범죄 단서를 찾는 수사기법
