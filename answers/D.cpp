#include<iostream>
#include<queue>
#include<functional>
#include<utility>
#include<vector>
#include<limits.h>
#include<algorithm>
#include<functional>
#include<fstream>

using namespace std;

int main(){
	ifstream f1("D.txt");
	ofstream f2("D_out.txt");	
	int N;
	f1>>N;
	for(int i = 0;i<N;i++){
		int M, K;
		f1>>M >> K;
		vector<int> v;
		for(int j = 0;j<K;j++){
			int Q;
			f1>>Q;
			v.push_back(Q);	
		}
		int s = 0;
		sort(v.begin(), v.end());
		for(int j = 0;j<v.size();j++){
			if(M - v[j] >= 0){
				s++;
				M-=v[j];
			}
		}
		f2<<s<<endl;
	}	
	f1.close();
	f2.close();
}
