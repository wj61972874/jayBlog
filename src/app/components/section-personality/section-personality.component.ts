import { NgClass, NgStyle } from '@angular/common';
import { afterNextRender, ChangeDetectorRef, Component, inject, Inject } from '@angular/core';
import { DynamicSvgComponent } from '@app/component/dynamic-svg/dynamic-svg.component';
import { DomainService } from '@app/services/domain.service';

const enEnergyContent = "Introverted";
const enMindContent = "Observant";
const enNatureContent = "Feeling";
const enTacticsContent = "Prospecting";
const enIdentityContent = "Assertive";

// 精力: 外向 | 内向
const energy = 61;
// 精神: 远见 | 现实
const mind = 69;
// 判断方式: 理性 | 感受
const nature = 61;
// 应对方式: 评判 | 展望
const tactics = 57;
// 身份特征: 坚决 | 起伏
const identity = 83;

interface Personality {
  type: 'energy' | 'nature' | 'tactics' | 'identity' | 'mind';
  color: string;
  value: number;
  image?: string;
  title: string;
  enOptions: string[];
  options: string[];
  enContent: string;
  zhContent: string;
  percent: string;
  desc: string;
  link: string;
}

@Component({
  selector: 'app-section-personality',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './section-personality.component.html',
  styleUrl: './section-personality.component.less'
})
export class SectionPersonalityComponent {

  personalities: Personality[] = [
    {
      type: "energy",
      title: "精力",
      enOptions: ["Extraverted", "Introverted"],
      options: ["外向", "内向"],
      enContent: enEnergyContent,
      zhContent: ["外向", "内向"][
        ["Extraverted", "Introverted"].findIndex(
          (item) => item === enEnergyContent
        )
      ],
      value: energy,
      percent: `${energy}%`,
      color: "#4298B4",
      desc: "内向型的人往往更喜欢较少但深入和有意义的社交互动，通常更喜欢安静的环境。",
      link: "https://www.16personalities.com/articles/energy-introverted-vs-extraverted",
    },
    {
      type: "mind",
      title: "精神",
      enOptions: ["Intuitive", "Observant"],
      options: ["远见", "现实"],
      enContent: enMindContent,
      zhContent: ["远见", "现实"][
        ["Intuitive", "Observant"].findIndex((item) => item === enMindContent)
      ],
      value: mind,
      percent: `${mind}%`,
      color: "#E4AE3A",
      desc: "现实型的人务实，脚踏实地。他们往往高度关注正在发生或非常可能发生的事情。",
      link: "https://www.16personalities.com/articles/mind-intuitive-vs-observant",
    },
    {
      type: "nature",
      title: "判断方式",
      enOptions: ["Thinking", "Feeling"],
      options: ["理性", "感受"],
      enContent: enNatureContent,
      zhContent: ["理性", "感受"][
        ["Thinking", "Feeling"].findIndex((item) => item === enNatureContent)
      ],
      value: nature,
      percent: `${nature}%`,
      color: "#33A474", // rbg(51, 164, 116)
      desc: "感受型的人重视情感表达和敏感性。他们非常重视同理心、社会和谐及合作。",
      link: "https://www.16personalities.com/articles/nature-thinking-vs-feeling",
    },
    {
      type: "tactics",
      title: "应对方式",
      enOptions: ["Judging", "Prospecting"],
      options: ["评判", "展望"],
      enContent: enTacticsContent,
      zhContent: ["评判", "展望"][
        ["Judging", "Prospecting"].findIndex(
          (item) => item === enTacticsContent
        )
      ],
      value: tactics,
      percent: `${tactics}%`,
      color: "#88619A", // rbg(136, 97, 154)
      desc: "评判型的人果断、周到，很有条理。他们重视清晰度、可预测性和封闭性，更喜欢结构和计划，而不是自发性。",
      link: "https://www.16personalities.com/articles/tactics-judging-vs-prospecting",
    },
    {
      type: "identity",
      title: "身份特征",
      enOptions: ["Assertive", "Turbulent"],
      options: ["坚决", "起伏"],
      enContent: enIdentityContent,
      zhContent: ["坚决", "起伏"][
        ["Assertive", "Turbulent"].findIndex(
          (item) => item === enIdentityContent
        )
      ],
      value: identity,
      percent: `${identity}%`,
      color: "#F25E62", // rbg(242, 94, 98)
      desc: "坚决型的人自信、性情平和，能抵抗压力。他们拒绝过度担心，在努力实现目标时往往会自信面对。",
      link: "https://www.16personalities.com/articles/identity-assertive-vs-turbulent",
    },
  ]

  selectType: Personality['type'] = 'energy';

  private domainService = inject(DomainService);
  typeData: Personality = this.personalities[0];

  constructor(private cdr: ChangeDetectorRef) {
    afterNextRender(() => {
      this.personalities.forEach((personality) => {
        personality.image = `${this.getRoutePrefix()}/assets/images/personalities/16personalities_trait_${personality.enContent.toLocaleLowerCase()}.svg`;
      });
      console.log('this.personalities', this.personalities);
      this.cdr.detectChanges(); // 手动触发变更检测
    })
  }

  ngOnInit(): void {
    this.updateTypeData();
  }

  getRoutePrefix() {
    return this.domainService.getDomain();
  }

  setSelectType(type: Personality['type']) {
    console.log('setSelectType', type);
    this.selectType = type;
    this.updateTypeData();
  }

  updateTypeData(): void {
    const data: Record<Personality['type'], Personality> = this.personalities.reduce((acc, cur) => {
      acc[cur.type] = cur;
      return acc;
    }, {} as Record<Personality['type'], Personality>);
    this.typeData = data[this.selectType] || data['energy'];
  }

}
