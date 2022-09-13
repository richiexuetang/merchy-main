import {
  extendType,
  intArg,
  list,
  nonNull,
  objectType,
  stringArg,
} from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.int('id');
    t.string('username');
    t.string('email');
    t.string('password');
    t.field('recentlyViewed', {
      type: list('Int'),
    });
    t.field('purchaseHistory', {
      type: list('Int'),
    });
    t.string('phonenumber');
  },
});

export const UsersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('users', {
      type: 'User',
      resolve: (_, args, ctx) => {
        return ctx.prisma.user.findMany({});
      },
    });
  },
});

export const SignupUserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('signupUser', {
      type: 'User',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
        phonenumber: nonNull(stringArg()),
        username: nonNull(stringArg()),
      },
      resolve: (_, args, ctx) => {
        return ctx.prisma.user.create({
          data: {
            email: args.email,
            password: args.password,
            phoneNumber: args.phonenumber,
            username: args.username,
          },
        });
      },
    });
  },
});
