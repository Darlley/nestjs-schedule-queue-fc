import { Tweet } from './../entities/tweet.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {Interval} from "@nestjs/schedule"

@Injectable()
export class TweetsCountService {
    constructor(
        @InjectModel(Tweet)
        private tweetModel: typeof Tweet,
    ){}

    @Interval(5000)
    async coutTweets() {
        const tweets = await this.tweetModel.findAll({
            offset: 10,
            limit: 10
        });
    }
}
