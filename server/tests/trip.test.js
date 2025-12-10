import { expect } from "chai";
import request from "supertest";
import app from "./settings/app.js";
import Model from "../models/index.js";
import { setupDB } from "./settings/setup.js";

describe("Trip Routes", () => {
  let tripId;
  let driverId;
  let vehicleId;

  setupDB();

  before(async () => {
    const driverData = {
      firstName: "John",
      lastName: "Doe",
      email: "driver@trip.test",
      password: "12345678",
      phone: "0612345678",
    };
    const driver = await Model.User.create({
      ...driverData,
      password: "hashed",
      roleId: await Model.Role.create({
        name: "Driver",
        description: "Driver",
      }).then((r) => r._id),
    });
    driverId = driver._id.toString();

    const vehicle = await Model.Vehicle.create({
      plateNumber: 555001,
      brand: "Volvo",
      model: "FH16",
      currentKm: 100000,
      status: "active",
      type: "truck",
    });
    vehicleId = vehicle._id.toString();
  });

  it("POST /create-trip → should create a new trip", async () => {
    const res = await request(app)
      .post("/api/create-trip")
      .send({
        driverId: driverId,
        vehicleId: vehicleId,
        startLocation: "Paris",
        endLocation: "Berlin",
        startDate: new Date(),
        endDate: new Date(Date.now() + 86400000),
        status: "pending",
        fuelLiters: 200,
        remarks: "Long distance trip",
      });

    expect(res.status).to.equal(200);
    expect(res.body.status).to.equal("create successfully");

    const trip = await Model.Trip.findOne({ startLocation: "Paris" });
    expect(trip).to.exist;
    tripId = trip._id.toString();
  });

  it("GET /trips → should get all trips", async () => {
    const res = await request(app).get("/api/trips");

    expect(res.status).to.equal(200);
    expect(res.body.status).to.equal("success");
    expect(res.body.data).to.be.an("array");
  });

  it("GET /trip/:id → should get trip by id", async () => {
    const res = await request(app).get(`/api/trip/${tripId}`);

    expect(res.status).to.equal(200);
    expect(res.body.status).to.equal("success");
    expect(res.body.data).to.exist;
    expect(res.body.data.startLocation).to.equal("Paris");
  });

  it("PUT /update-trip/:id → should update trip", async () => {
    const res = await request(app).put(`/api/update-trip/${tripId}`).send({
      status: "active",
      fuelLiters: 250,
    });

    expect(res.status).to.equal(200);
    expect(res.body.status).to.equal("updated successfully");

    const updated = await Model.Trip.findById(tripId);
    expect(updated.status).to.equal("active");
  });

  it("DELETE /delete-trip/:id → should delete trip", async () => {
    
    const tripToDelete = await Model.Trip.create({
      driverId: driverId,
      vehicleId: vehicleId,
      startLocation: "London",
      endLocation: "Paris",
      status: "pending",
    });

    const res = await request(app).delete(
      `/api/delete-trip/${tripToDelete._id}`
    );

    expect(res.status).to.equal(200);
    expect(res.body.status).to.equal("delete successfully");

    const deleted = await Model.Trip.findById(tripToDelete._id);
    expect(deleted).to.be.null;
  });
});
