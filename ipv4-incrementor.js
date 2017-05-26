/**

 Given an IPv4 IP address p and an integer n, return a list
 of CIDR strings that most succinctly represents the range of IP addresses from p to (p + n).

 **/


/**
* p - ip addresss
* n - how many ip addresses to get
**/
const ipv4 = (p = '', n = 0) => {
  const subnets = p.split('.').map(Number);
  const allIps = [...Array(n).keys()].map((number) => {
    const real4 = subnets[3] + number;
    const subnet4 = real4 % 256;

    const real3 = subnets[2] + Math.floor(real4 / 256);
    const subnet3 = real3 % 256;

    const real2 = subnets[1] + Math.floor(real3 / 256);
    const subnet2 = real2 % 256;

    const real1 = subnets[0] + Math.floor(real2 / 256);
    const subnet1 = real1 % 256;

    return `${subnet1}.${subnet2}.${subnet3}.${subnet4}`;
  });

  return allIps;
};

console.log(ipv4('255.255.255.254', 10));
