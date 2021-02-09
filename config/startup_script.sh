rm -rf *
git clone https://github.com/Seabagel/MamaSlimes.git
cd MamaSlimes
git pull
git fetch
npm i
npm run start &
disown -h
exit