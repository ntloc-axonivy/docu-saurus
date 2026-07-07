import { useVersions } from '@docusaurus/plugin-content-docs/client';

export function getNextVersionPath() {
  const versions = useVersions();
  const currentVersion = versions.find((v) => v.name === 'current');
  return currentVersion ? currentVersion.path : '/docs';
}
