import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ResumeContextService } from '@app/constants/resume';

@Component({
  selector: 'app-resume-skill',
  standalone: true,
  imports: [NgClass],
  templateUrl: './resume-skill.component.html',
  styleUrl: './resume-skill.component.less'
})
export class ResumeSkillComponent implements OnInit {

  skills: any[] = []
  resumeContextService = inject(ResumeContextService);

  ngOnInit() {
    this.skills = this.resumeContextService.getSkills();
  }
}
