import Offer from "@domain/entities/Offer.entity";
import Range from "@domain/entities/Range.entity";
import RangeUnit from "@domain/enums/RangeUnit.enum";

describe("Offer.entity", () => {
  it("create an offer OFR001 with 10% discount, distance [0 - 200], weight [70-200]", () => {
    const name = "OFR001";
    const discountPercentage = 10;
    const distance = Range.build(0, 200, RangeUnit.Distance);
    const weight = Range.build(70, 200, RangeUnit.Weight);
    const offer = new Offer({ name, discountPercentage, distance, weight });
    const buildOffer = Offer.build(
      name,
      discountPercentage,
      distance.min,
      distance.max,
      weight.min,
      weight.max
    );

    expect(offer.name).toBe(name);
    expect(offer.weight).toEqual(weight);
    expect(offer.distance).toEqual(distance);
    expect(buildOffer).toEqual(offer);
  });

  it("create an offer OFR002 with 7% discount, distance [50-150], weight [100-200]", () => {
    const name = "OFR002";
    const discountPercentage = 7;
    const distance = Range.build(50, 150, RangeUnit.Distance);
    const weight = Range.build(100, 200, RangeUnit.Weight);
    const offer = new Offer({ name, discountPercentage, distance, weight });
    const buildOffer = Offer.build(
      name,
      discountPercentage,
      distance.min,
      distance.max,
      weight.min,
      weight.max
    );

    expect(offer.name).toBe(name);
    expect(offer.weight).toEqual(weight);
    expect(offer.distance).toEqual(distance);
    expect(buildOffer).toEqual(offer);
  });

  it("create an offer OFR003 with 5% discount, distance [5-250], weight [10-150]", () => {
    const name = "OFR003";
    const discountPercentage = 5;
    const distance = Range.build(5, 250, RangeUnit.Distance);
    const weight = Range.build(10, 150, RangeUnit.Weight);
    const offer = new Offer({ name, discountPercentage, distance, weight });
    const buildOffer = Offer.build(
      name,
      discountPercentage,
      distance.min,
      distance.max,
      weight.min,
      weight.max
    );

    expect(offer.name).toBe(name);
    expect(offer.weight).toEqual(weight);
    expect(offer.distance).toEqual(distance);
    expect(buildOffer).toEqual(offer);
  });
});
