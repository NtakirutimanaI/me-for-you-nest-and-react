import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeamMemberDto } from './dto/create-team_member.dto';
import { UpdateTeamMemberDto } from './dto/update-team_member.dto';
import { TeamMember } from './entities/team_member.entity';

@Injectable()
export class TeamMembersService {
  constructor(
    @InjectRepository(TeamMember)
    private repo: Repository<TeamMember>,
  ) { }

  create(createDto: any) {
    return this.repo.save(createDto);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, updateDto: any) {
    return this.repo.update(id, updateDto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
