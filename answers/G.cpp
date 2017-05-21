#include <iostream>
#include<fstream>

using namespace std;

int main()
{
	ifstream f("G.txt");
	ofstream f2("G_out.txt");
	int T = 0, N = 0, save = 0, b = 2, t = 0, count = 0, howmany = 0, yorn=0, how2=0;
	int arr[100] = { 0 };
	f >> T;
	for (int i = 0; i < T; i++)
	{
		yorn = 0;
		howmany = 0;
		f >> N;
		save = N;
		while (b!=65)
		{
			howmany = 0;
			while (1)
			{
				if (N < b)
					break;
				arr[t] = N%b;
				N = N / b;
				t++;
				howmany++;
			}
			arr[t] = N;
			howmany++;
			how2 = howmany;
			for (int j = 0; j < how2; j++)
			{
				if (arr[j] != arr[howmany - 1])
					break;
				if (j >= howmany)
				{
					yorn = 1;
					f2 << "1" << endl;
					goto out;
				}
				howmany--;
			}
			for (int i = 0; i < 100; i++)
				arr[i] = 0;
			b++;
			N = save;
			t = 0;
		}
	out:
		if (!yorn)
			f2 << "0" << endl;
		b = 2;
		t = 0;
	}
	f.close();
	f2.close();
	return 0;
}
