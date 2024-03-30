import Offer from "@domain/entities/Offer.entity";
import Package from "@domain/entities/Package.entity";
import Datum from "@infra/data";

describe("Datum", () => {
  it("print Datum", () => {
    Datum.baseDeliveryCost = 100;
    Datum.numberOfPackages = 3;
    Datum.packages = [Package.build("PKG1", 5, 5, "OFR001")];
    Datum.offers = [Offer.build("OFR001", 10, 0, 200, 70, 200)];
    expect(Datum.toString()).toBe(
      'baseDeliveryCost: 100, numberOfPackages: 3, packages: [{"name":"PKG1","weight":5,"distance":5,"offer":"OFR001"}], offers: [{"code":"OFR001","discountPercentage":10,"distance":{"min":0,"max":200,"unit":"km"},"weight":{"min":70,"max":200,"unit":"kg"}}]'
    );
  });
});
