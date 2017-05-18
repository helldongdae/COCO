import sys

ans = ''
sub = ''

try:
	ans = open(sys.argv[1])
	sub = open(sys.argv[2])
except:
	print 'WRONG'
	exit()

real_ans = ans.readlines()
sub_ans = sub.readlines()

if len(real_ans) != len(sub_ans):
	print 'WRONG'
	exit()

for i in range(len(real_ans)):
	real_ans[i] = real_ans[i].strip()
	sub_ans[i] = sub_ans[i].strip()
	if real_ans[i] != sub_ans[i]:
		print 'WRONG'
		exit()

print 'CORRECT'


