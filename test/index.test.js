const AnnualParallax = require("../index");
const { JDateRepository } = require("@behaver/jdate");
const { SphericalCoordinate3D } = require('@behaver/coordinate');
const Angle = require('@behaver/angle');

const expect = require("chai").expect;
const angle = new Angle;

describe('#AnnualParallax', () => {
  describe('#constructor', () => {
    it('The param time should be a JDateRepository.', () => {
      expect(() => {
        new AnnualParallax({
          time: new JDateRepository(18, 'j2000'),
          sc: new SphericalCoordinate3D(1, 1, 1),
        })
      }).not.to.throw();

      expect(() => {
        new AnnualParallax({
          time: 123,
          sc: new SphericalCoordinate3D(1, 1, 1),
        })
      }).to.throw();
    });
  });

  describe('#get()', () => {
    it('Verify', () => {
      let JD = (new JDateRepository(new Date('2028/11/13 8:0:0'), 'date')).JD,
          time = new JDateRepository(JD + 0.19, 'jd'),
          a = angle.setDegrees(41.0540613).getRadian(),
          b = Math.PI / 2 - angle.setDegrees(49.2277489).getRadian(),
          sc = new SphericalCoordinate3D(206265, b, a),
          AP = new AnnualParallax({
            time,
            sc,
          }),
          res = AP.get();

      AP.system = 'ecliptic';

      console.log(AP.get());
    });
  });

  describe('#set time(time)', () => {
    it('After set time, the return of get() should be changed.', () => {
      let AP = new AnnualParallax({
        time: new JDateRepository(18, 'j2000'),
        sc: new SphericalCoordinate3D(1, 1, 1),
      });

      let r0 = AP.get();

      AP.time = new JDateRepository(0, 'j2000');

      let r1 = AP.get();

      expect(r0.a).not.to.equal(r1.a);
      expect(r0.b).not.to.equal(r1.b);
    })
  });

  describe('#get time()', () => {
    it('The return of set time() should be a JDateRepository.', () => {
      let AP = new AnnualParallax({
        time: new JDateRepository(18, 'j2000'),
        sc: new SphericalCoordinate3D(1, 1, 1),
      });

      expect(AP.time).to.be.a.instanceof(JDateRepository);
    })
  });
})