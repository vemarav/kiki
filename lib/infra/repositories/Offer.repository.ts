import Offer from "@domain/entities/Offer.entity";
import OfferRepository from "@domain/repositories/Offer.repository";
import Datum from "@infra/data";

export default class OfferRepositoryImpl implements OfferRepository {
  getOffers(): Offer[] {
    return Datum.offers;
  }

  findOffer(code: string): Offer {
    return (
      Datum.offers.find((offer) => offer.code === code) ??
      Offer.build("NA", 0, 0, 0, 0, 0)
    );
  }
}
