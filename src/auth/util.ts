export const hasAnyAuthority = (authorities: string[], hasAnyAuthorities: string[]) => {
  if (!hasAnyAuthorities || hasAnyAuthorities.length === 0) {
    return true;
  }
  if (authorities && authorities.length !== 0) {
    return hasAnyAuthorities.some((auth) => authorities.includes(auth));
  }

  return false;
};
