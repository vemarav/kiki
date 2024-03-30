import Offer from "@domain/entities/Offer.entity";

export default abstract class OfferRepository {
  abstract getOffers(): Offer[];
  abstract findOffer(code: string): Offer;
}
