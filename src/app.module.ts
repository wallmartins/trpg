import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { UserModule } from './user/user.module';
import { TopicModule } from './topic/topic.module';
import { PostModule } from './post/post.module';
import { CommunityModule } from './community/community.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, }), PrismaModule, AuthModule, ProfileModule, UserModule, TopicModule, PostModule, CommunityModule],
})
export class AppModule {}
