import { policies1 } from './suspension-policies-1';
import { policies2 } from './suspension-policies-2';
import { policies3 } from './suspension-policies-3';
import { securityPolicies } from './suspension-policies-security';
export type { SuspensionPolicy, SuspensionPolicyCaseStudy } from './suspension-policy-types';
export const suspensionPolicies = [...policies1,...policies2,...policies3,...securityPolicies];
export function getSuspensionPolicy(slug:string){ return suspensionPolicies.find(p=>p.slug===slug); }
