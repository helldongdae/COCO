#include<iostream>
#include<vector>
#include<utility>
#include<algorithm>
#include<functional>
#include<string>
#include<queue>
#include<fstream>
#include<limits.h>

using namespace std;

bool q[1000001] = { false };

struct Point{
	Point(){
		x = 0;
		y = 0;
	}

	Point(long double a, long double b){
		x = a;
		y = b;
	}
	long double x, y;
};

bool equals(Point a, Point b){
	if (a.x == b.x && a.y == b.y)
		return true;
	else
		return false;
}

Point intersect_point(Point x1, Point y1, Point x2, Point y2){
	long long a1 = (x1.x*y1.y - x1.y*y1.x)*(x2.x - y2.x);
	long long a2 = (x1.x - y1.x)*(x2.x*y2.y - x2.y*y2.x);
	long long a3 = (x1.x - y1.x)*(x2.y - y2.y);
	long long a4 = (x1.y - y1.y)*(x2.x - y2.x);
	long double bunmo = a3 - a4;
	if (bunmo == 0)
		return Point(INT_MIN, INT_MIN);
	else{
		long long b1 = (x1.x*y1.y - x1.y*y1.x)*(x2.y - y2.y);
		long long b2 = (x1.y - y1.y)*(x2.x*y2.y - x2.y*y2.x);
		long double p1 = (long double)(a1 - a2) / bunmo;
		long double p2 = (long double)(b1 - b2) / bunmo;
		return Point(p1, p2);
	}
}

bool is_between(Point x1, Point y1, Point x2, Point y2, Point z){
	if (z.x >= min(x1.x, y1.x) && z.x <= max(x1.x, y1.x) && z.y >= min(x1.y, y1.y) && z.y <= max(x1.y, y1.y))
		if (z.x >= min(x2.x, y2.x) && z.x <= max(x2.x, y2.x) && z.y >= min(x2.y, y2.y) && z.y <= max(x2.y, y2.y))
			return true;
	return false;
}

int does_intersect(Point x1, Point y1, Point x2, Point y2){
	Point p = intersect_point(x1, y1, x2, y2);
	if (equals(p, Point(INT_MIN, INT_MIN))){
		if (min(x1.x, y1.x) < max(x2.x, y2.x) && max(x1.x, y1.x) > min(x2.x, y2.x))
			if (x1.y == y1.y && y1.y == x2.y && x2.y == y2.y)
				return -1;
		if (min(x1.y, y1.y) < max(x2.y, y2.y) && max(x1.y, y1.y) > min(x2.y, y2.y))
			if (x1.x == y1.x && y1.x == x2.x && x2.x == y2.x)
				return -1;
		return 0;
	}
	else{
		if (is_between(x1, y1, x2, y2, p))
			return 1;
		else
			return 0;
	}
}

int main(){
	ifstream f("E.txt");
	ofstream f2("E_out.txt");
	int N, M;
	f >> N >> M;
	vector<pair<Point, Point> > v;
	for (int i = 0; i < N; i++){
		int a, b, c, d;
		f >> a >> b >> c >> d;
		v.push_back(make_pair(Point(a, b), Point(c, d)));
	}
	int K;
	f >> K;
	for (int i = 0; i < K; i++){
		int a, b, c, d;
		f >> a >> b >> c >> d;
		bool qq = false;
		for (int j = 0; j < N; j++){
			if (does_intersect(v[j].first, v[j].second, Point(a, b), Point(c, d)) == 1)
				qq = true;
		}
		if (qq)
			f2 << "die\n";
		else
			f2 << "live\n";
	}
	f.close();
	f2.close();
}
