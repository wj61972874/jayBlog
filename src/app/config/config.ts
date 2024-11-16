import { DomainService } from '../services/domain.service';

let domainService: DomainService;

export function setDomainService(service: DomainService) {
    console.log('setDomainService', service);
    domainService = service;
}

export function getRoutePrefix(): string {
    console.log('getRoutePrefix', domainService);
    if (!domainService) {
        throw new Error('DomainService is not set');
    }
    return domainService.domain;
}