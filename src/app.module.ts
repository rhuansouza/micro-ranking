import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProxyRMQModule } from './proxyrmq/proxyrmq.module';
import { ConfigModule } from '@nestjs/config'
import { RankingsModule } from './rankings/rankings.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dsdsdd:tyeghfghf@cluster0.yhepsrk.mongodb.net/srranking?retryWrites=true&w=majority',
      {
        //useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
      },
    ),
    ProxyRMQModule,
    RankingsModule,
    ConfigModule.forRoot({isGlobal: true}),
],
})
export class AppModule {}
