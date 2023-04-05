import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
//import { E_Role } from './types';

@Entity('users')
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ name: 'login', type: 'varchar' })
	login: string;

	@Column({ name: 'email', type: 'varchar' })
	email: string;

	@Column({ name: 'password', type: 'varchar' })
	password: string;

	/* @Column({ name: 'role_id', type: 'enum', enum: E_Role })
	role: E_Role; */
}
