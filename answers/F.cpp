#include<vector>
#include<iostream>
#include<fstream>
#include<utility>
#include<vector>

using namespace std;

int graph[51][51]={0};
int vis[51][51] = {0};
int M, K;

void DFS(int m, int k){
	vis[m][k] =1 ;
	if(m > 0 && vis[m-1][k] == 0 && graph[m-1][k] == 1)
		DFS(m-1, k);
	if(m < K && vis[m+1][k] == 0 && graph[m+1][k] == 1)
		DFS(m+1, k);
	if(k > 0 && vis[m][k-1] == 0 && graph[m][k-1] == 1)
		DFS(m, k-1);
	if(k < M && vis[m][k+1] == 0 && graph[m][k+1] == 1)
		DFS(m, k+1);
	if(m < K && k < M && vis[m+1][k+1] == 0 && graph[m+1][k+1] == 1)
		DFS(m+1, k+1);
	if(m > 0 && k > 0 && vis[m-1][k-1] == 0 && graph[m-1][k-1] == 1)
		DFS(m-1, k-1);
	if(m > 0 && k < M && vis[m-1][k+1] == 0 && graph[m-1][k+1] == 1)
		DFS(m-1, k+1);
	if(m < K && k > 0 && vis[m+1][k-1] == 0 && graph[m+1][k-1] == 1)
		DFS(m+1, k-1);
}

int main(){
	ifstream f("F.txt");
	ofstream f2("F_out.txt");
	while(true){
		f>>M>>K;
		if(M == 0 && K == 0)
			break;
		for(int i = 0;i<51;i++){
			for(int j = 0;j<51;j++){
				graph[i][j] = 0;
				vis[i][j] = 0;			
			}
		}
		for(int i = 0;i<K;i++){
			for(int j = 0;j<M;j++){
				f>>graph[i][j];
			}
		}
		int n = 0;
		for(int i = 0;i<K;i++){
			for(int j = 0;j<M;j++){
				if(graph[i][j] == 1 && vis[i][j] == 0){
					n++;
					DFS(i, j);
				}		
			}
		}
		f2<<n<<endl;
	}
	f.close();
	f2.close();
}
