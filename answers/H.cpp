#include <cstdio>
#include <vector>
#include <queue>
#include <iostream>
#include <math.h>
#include <stdlib.h>
#include<fstream>

using namespace std;

vector<int> tree[50001];


int level[50001] = { 0 };

int parent[50001] = { 0 };

queue<int> q;

void DFS(int src){
	q.push(src);
	level[src] = 0;
	parent[src] = 0;
	while (q.empty() == false){
		int p = q.front();
		q.pop();
		for (int j = 0; j < tree[p].size(); j++){
			if (tree[p][j] != parent[p]){
				q.push(tree[p][j]);
				level[tree[p][j]] = level[p] + 1;
				parent[tree[p][j]] = p;
			}
		}
	}
}

int LCA(int src, int dst){
	int a = src;
	int b = dst;
	while (level[a] > level[b]){
		a = parent[a];
	}
	while (level[a] < level[b]){
		b = parent[b];
	}
	while (parent[a] != parent[b]){
		a = parent[a];
		b = parent[b];
	}
	if (a == b)
		return a;
	else
		return parent[a];
}

int main(){
	ifstream f("H.txt");
	ofstream f2("H_out.txt");
	int T;
	f>>T;
	for(int k = 0;k<T;k++){
		for (int i = 0; i < 50001; i++){
			level[i] = 0; parent[i] = 0; tree[i].clear();
		}
		int n;
		f >> n;
		for (int i = 0; i < n-1; i++){
			int a, b;
			f >> a >> b;
			tree[a].push_back(b);
			tree[b].push_back(a);
		}
		DFS(1);
		int m;
		f >> m;
		int root = 1;
		int tot = 0;
		for (int i = 0; i < m; i++){
			int a;
			f >> a;
			int lca = LCA(root, a);
			int n1 = level[root] - level[lca];
			int n2 = level[a] - level[lca];
			tot += abs(n1) + abs(n2);
			root = a;
		}
		f2 << tot << endl;
	}
	f.close();
	f2.close();
}
