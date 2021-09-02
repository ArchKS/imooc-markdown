
rm -f .*un~


echo "> Git Add & Commit!"
git add .
msg='zendu   '`date "+%Y-%m-%d %H:%M:%S"`
git commit -m "${msg}"

echo "> Git Push "
git push
