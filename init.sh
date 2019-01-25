cloneGitNote() {
  path=`pwd`
  cd ..
  git clone -b blog https://github.com/lipses/GitNote.git
  cd $path
}
gitnote_floder=../GitNote
source_floder=./source
if [ ! -d "$gitnote_floder" ]; then
  cloneGitNote
fi
if [ -d "$source_floder" ]; then
  rm -rf $source_floder
fi
mkdir $source_floder
cp -r $gitnote_floder/* $source_floder/
