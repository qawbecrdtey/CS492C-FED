echo "Running fix.sh..."

cd server
npm audit fix
cd ../client
npm audit fix
cd ..

echo "Finished fix.sh."