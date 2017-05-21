#include<iostream>
#include<vector>
#include<utility>
#include<algorithm>
#include<functional>
#include<fstream>

using namespace std;

int dp[10001] = { 0 };

int main(){
	ifstream f("C.txt");
	ofstream f2("C_out.txt");
	int T;
	f>>T;
	for(int k = 0;k<T;k++){
		int N;
		f >> N;
		vector<int> v;
		v.push_back(0);
		for (int i = 0; i < N; i++){
			int q;
			f >> q;
			v.push_back(q);
		}

		dp[1] = v[1];
		dp[2] = v[1] + v[2];

		for (int i = 3; i <= N; i++)
			dp[i] = max(dp[i - 3] + v[i - 1] + v[i], max(dp[i - 1], dp[i - 2] + v[i]));

		f2 << dp[N]<<endl;
	}
}
