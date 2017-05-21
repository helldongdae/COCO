#include<iostream>
#include<vector>
#include<utility>
#include<algorithm>
#include<functional>
#include<fstream>

using namespace std;

int main(){
	ifstream f1("A.txt");
	ofstream f2("A_out.txt");
	int T;
	f1>>T;
	for(int j = 0;j<T;j++){
		int a;
		f1 >> a;
		vector<pair<int, int> > v;
		for (int i = 0; i < a; i++){
			int b, c;
			f1 >> b >> c;
			v.push_back(make_pair(c, b));
		}
		sort(v.begin(), v.end());
		int Max = v[0].first, cnt = 1;
		for (int i = 1; i < a; i++){
			if (v[i].second >= Max){
				Max = v[i].first;
				cnt++;
			}
		}
		f2 << cnt << endl;
	}
	f1.close();
	f2.close();
}
