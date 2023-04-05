import { Controller, Get, Param, Post, Req, Res, ParseIntPipe, Put, Body } from '@nestjs/common';
import { Response, Request } from 'express';

import { UserService } from './user.service';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('/:id')
	async getUserById(
		@Req() req: Request,
		@Param('id', ParseIntPipe) id: number,
		@Res() res: Response,
	) {
		const userData = await this.userService.getUserData(id);
		return res.send({ status: 'ok', data: userData });
	}

	@Get('/')
	async getAllUsers() {
		const users = await this.userService.getAllUsers();
		return { status: 'ok', data: [users] };
	}

	@Post('/')
	async createUser(@Req() req: Request, @Res() res: Response) {
		await this.userService.createUser(req.body);
		return res.send({ status: 'ok' });
	}

	@Put('/:id')
	async updateUser(
		@Req() req: Request,
		@Param('id', ParseIntPipe) id: number,
		@Body() body: UpdateUserDto,
		@Res() res: Response,
	) {
		this.userService.updateUserData(id, body);
		return res.send({ status: 'ok' });
	}
}
