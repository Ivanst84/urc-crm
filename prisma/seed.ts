import { PrismaClient } from '@prisma/client';
import { addressData } from './data/adress';
import { userData } from './data/users';
import { routerData } from './data/routeword';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

async function main() {
  try {
    console.log('Deleting existing data...');
    await prisma.address.deleteMany();
    await prisma.user.deleteMany();
    await prisma.route.deleteMany();

    console.log('Inserting route data...');
    const routes = await prisma.route.createMany({
      data: routerData,
    });
    console.log(`Inserted ${routes.count} routes`);

    console.log('Inserting user data...');
    const users = await prisma.user.createMany({
      data: userData,
    });
    console.log(`Inserted ${users.count} users`);

    console.log('Inserting address data...');
    const addresses = await prisma.address.createMany({
      data: addressData,
    });
    console.log(`Inserted ${addresses.count} addresses`);

    console.log('Seed data successfully inserted.');
  } catch (error) {
    console.error('Error inserting seed data:', error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });