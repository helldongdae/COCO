#include<iostream>
#include<queue>
#include<functional>
#include<utility>
#include<vector>
#include<limits.h>
#include<fstream>

using namespace std;

// Dijkstra's Algorithm
struct dijkstra{
	dijkstra(int capacity){
		MAX = capacity;
		parent = new int[MAX];
		weight = new int[MAX];
		for (int i = 0; i < MAX; i++){
			weight[i] = INT_MAX;
			parent[i] = -1;
		}
		adj = new vector< pair<int, int> >[MAX];
	}

	~dijkstra(){
		delete[] parent;
		delete[] weight;
	}

	void addedge_directed(int src, int dst, int weight){
		adj[src].push_back(make_pair(weight, dst));
	}

	void addedge_undirected(int src, int dst, int weight){
		adj[src].push_back(make_pair(weight, dst));
		adj[dst].push_back(make_pair(weight, src));
	}

	// Initialize parent array
	void init_parent(){
		delete[] parent;
		parent = new int[MAX];
	}

	// Initialize weight array
	void init_weight(){
		for (int i = 0; i < MAX; i++)
			weight[i] = INT_MAX;
	}

	// Initialize all except adj list
	void init_all(){
		delete[] parent;
		parent = new int[MAX];
		for (int i = 0; i < MAX; i++)
			weight[i] = INT_MAX;
		while (!pque.empty())
			pque.pop();
	}

	int calculate_dist(int src, int dst){
		weight[src] = 0;
		pair<int, int> myPair = make_pair(weight[src], src);
		pque.push(myPair);
		parent[1] = -1;
		while (!pque.empty()){
			pair<int, int> myPair2 = pque.top();
			pque.pop();
			int now = myPair2.second;
			// Reached to the destination
			if (now == dst)
				break; 
			vector< pair<int, int> >::iterator i;
			for (i = adj[now].begin(); i != adj[now].end(); i++){
				int alt = weight[now] + i->first;
				if (weight[i->second] > alt)
				{
					weight[i->second] = alt;
					parent[i->second] = now;
					pque.push(make_pair(alt, i->second));
				}
			}
		}
		if (weight[dst] == INT_MAX)
			return 0;
		else
			return weight[dst];

	}
	
	void pa(int n){
		int q = parent[n];
		vector<int> v;
		v.push_back(n);
		while(q != -1)
			{v.push_back(q); q = parent[q];}
		if(v.size() == 1){
			cout<<-1;
			return;
		}
		for(int i = v.size()-1;i>=0;i--)
			cout<<v[i] << " ";	
	}

	// Variable area
	int MAX;
	int *parent;
	int *weight;
	priority_queue<pair<int, int>, vector<pair<int, int> >, greater< pair<int, int> > > pque;
	// First is weight, Second is destination
	vector< pair<int, int> > *adj;
};


int main(){
	ifstream f1("B.txt");
	ofstream f2("B_out.txt");	
	int N, M;
	f1>>N>>M;
	dijkstra djk(N+1);
	int a,b,c,d;
	f1>>a>>b>>c>>d;
	for(int j = 0;j<M;j++){
		int q, w, e;
		f1>>q>>w>>e;
		djk.addedge_undirected(q, w, e);
	}
	int sum = 0;
	sum += djk.calculate_dist(a, b);
	djk.init_all();
	sum += djk.calculate_dist(b, c);
	djk.init_all();
	sum += djk.calculate_dist(c, d);
	djk.init_all();
	sum += djk.calculate_dist(d, a);
	djk.init_all();
	f2<<sum;
	f1.close();
	f2.close();
}
