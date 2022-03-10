## emplace
- vector, queue, map, list 컨테이너에서 간단하게 요소를 삽입할 수 있는 함수

- vector - push_back vs emplace_back
```c++
#include <iostream>
#include <vector>
#include <tuple>
using namespace std;
int main() {
    int a, b, c;
    vector<tuple<int, int, int>> v;
    v.push_back(make_tuple(1, 2, 3));
    tie(a, b, c) = v[0];
    printf("%d %d %d\n", a, b, c); //1 2 3
 
    v.emplace_back(4, 5, 6);
    tie(a, b, c) = v[1];
    printf("%d %d %d\n", a, b, c); // 4 5 6
}
```

- queue - push vs emplace
```c++
#include <iostream>
#include <tuple>
#include <queue>
using namespace std;
int main() {
    int a, b, c;
    queue<tuple<int, int, int>> q;
 
    q.push(make_tuple(1, 2, 3));
    tie(a, b, c) = q.front();
    printf("%d %d %d\n", a, b, c);
    q.pop();
 
    q.emplace(4, 5, 6);
    tie(a, b, c) = q.front();
    printf("%d %d %d\n", a, b, c);
}
```

- map - insert + make_pair vs emplace
```c++
#include <iostream>
#include <tuple>
#include <map>
using namespace std;
int main() {
    map<int, int> m;
    m.insert(make_pair(1, 2));
    m.emplace(3, 4);
    
    for (auto it=m.begin(); it!=m.end(); it++) {
        cout << it->first << " " << it->second << "\n";
    }
}
```

- list - insert vs emplace
```c++
#include <iostream>
#include <list>
using namespace std;
int main() {
    list<pair<int, int>> L;
    L.insert(L.begin(), make_pair(1, 2));
    L.emplace(L.begin(), 3, 4);
    
    for (auto it=L.rbegin(); it!=L.rend(); it++) {
        cout << it->first << " " << it->second << "\n";
    }
}
```

- 주의 사항
    - emplace는 호환성이 떨어진다. 
    - 혼자 하는 알고리즘 또는 개인 프로젝트에서는 유용하나, 다른 사람과 같이 할 때는 웬만하면 push_back, insert를 사용하는 것을 추천

**출처 : https://suhwanc.tistory.com/84**
