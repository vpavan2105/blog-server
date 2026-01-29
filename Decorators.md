
@ -> decorator : is the meta data of the code. which is just a function

@Module() 

    which group together all the related components (controller,service,other modules so on..)

    ex : controller,providers,imports





@Controlle(path?)

    Defines the route prefix

@Get, @Post, @Put, @Delete 

    Degines the method level route

@Param(), @Query(), @Body(), @Headers(), @Req(), @Res():

    Decorators that extract req details 


@Injectable() 

    registering this class in nestjs dependency injection system

    used for to inject services, repositories,providers,custom helpers
