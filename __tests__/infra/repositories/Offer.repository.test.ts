import Offer from "@domain/entities/Offer.entity";
import Datum from "@infra/data";
import OfferRepository from "@infra/repositories/Offer.repository";

describe("Offer repository", () => {
  let offerRepository: OfferRepository;

  beforeAll(() => {
    Datum.offers = [
      Offer.build("OFR001", 10, 0, 200, 70, 200),
      Offer.build("OFR002", 7, 50, 150, 100, 150),
      Offer.build("OFR003", 5, 50, 250, 10, 150),
    ];
    offerRepository = new OfferRepository();
  });

  it("return all available offers", () => {
    expect(offerRepository.getOffers()).toEqual([
      Offer.build("OFR001", 10, 0, 200, 70, 200),
      Offer.build("OFR002", 7, 50, 150, 100, 150),
      Offer.build("OFR003", 5, 50, 250, 10, 150),
    ]);
  });

  it("on adding more offers it will returns previous along with currently added", () => {
    Datum.offers.push(
      Offer.build("OFR004", 7, 55, 150, 70, 250),
      Offer.build("OFR005", 5, 150, 250, 40, 140)
    );

    expect(offerRepository.getOffers()).toEqual([
      Offer.build("OFR001", 10, 0, 200, 70, 200),
      Offer.build("OFR002", 7, 50, 150, 100, 150),
      Offer.build("OFR003", 5, 50, 250, 10, 150),
      Offer.build("OFR004", 7, 55, 150, 70, 250),
      Offer.build("OFR005", 5, 150, 250, 40, 140),
    ]);
  });

  it("finds and returns OFR001 offer", () => {
    expect(offerRepository.findOffer("OFR001")).toEqual(
      Offer.build("OFR001", 10, 0, 200, 70, 200)
    );
  });

  it("finds and returns NA offer if not found", () => {
    expect(offerRepository.findOffer("OFR01")).toEqual(
      Offer.build("NA", 0, 0, 0, 0, 0)
    );
  });
});
