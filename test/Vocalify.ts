import { expect } from "chai";
import hre,{ethers} from 'hardhat';







describe('Vocalify',()=>{
  before('get factories', async function () {
    this.Vocalify = await hre.ethers.getContractFactory('Vocalify');
    this.Vocalify2 = await hre.ethers.getContractFactory('Vocalify2');
    this.vocalify = await hre.upgrades.deployProxy(this.Vocalify);

    // this.MarsV2 = await hre.ethers.getContractFactory('MarsV2');
  });
    it('Check name and total supply', async function () {

        
      
         expect(await this.vocalify.name()).to.eq('Vocalify');
        // expect(await vocalify.totalSupply()  === 20000);
      
        // const marsV2 = await hre.upgrades.upgradeProxy(mars, this.MarsV2);
        // expect(await marsV2.version() === 'v2!');
      });
    it('Check  total supply', async function () {
        // const vocalify = await hre.upgrades.deployProxy(this.Vocalify);
        expect(await this.vocalify.totalSupply()).to.eq(ethers.parseEther('200000000'));

      });
    it('upgrade test', async function () {
        
        const vocalify2 = await hre.upgrades.upgradeProxy(this.vocalify, this.Vocalify2);
        expect(await vocalify2.version() === 'v2!');
      });
      
})