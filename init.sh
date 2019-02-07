cloneGitNote() {
  cd ..
  git clone -b blog https://github.com/lipses/GitNote.git
  cd $projectPath
}
cloneArtical(){
  currentPath=$1
  cpPath=$source_floder${currentPath#$gitnote_floder}
  if [ ! -d "`dirname $cpPath`" ]; then
    mkdir -p `dirname $cpPath`/
  fi		
  cp -rf $currentPath $cpPath
}
projectPath=`pwd`
gitnote_floder=../GitNote
source_floder=./source
if [ ! -d "$gitnote_floder" ]; then
  cloneGitNote
fi
if [ -d "$source_floder" ]; then
  find $source_floder -name "*.md" | grep -v "README.md" | xargs rm -f
fi
for item in `find $gitnote_floder -name "*.md" | grep -v "README.md" | grep -v ".unfinished"`
do
  cloneArtical $item
done