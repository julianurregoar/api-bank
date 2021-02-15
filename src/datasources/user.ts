import { PrismaClient } from "@prisma/client";
import { DataSource } from "apollo-datasource";
import isEmail from "isemail";

export class UserAPI extends DataSource {
  prisma: PrismaClient;
  context: any;

  constructor({ prisma }: any) {
    super();
    this.prisma = prisma;
  }

  initialize(config: any) {
    this.context = config.context;
  }

  async findOrCreateUser(emailInput: { email?: string } = {}) {
    const email = this.context && this.context.user
      ? this.context.user.email
      : emailInput.email;
    if (!email || !isEmail.validate(email)) return null;
    // there is an email

    const user = await this.prisma.user.upsert({
      where: { email },
      create: { email },
      update: { email },
    })
    return user;
  }
}
