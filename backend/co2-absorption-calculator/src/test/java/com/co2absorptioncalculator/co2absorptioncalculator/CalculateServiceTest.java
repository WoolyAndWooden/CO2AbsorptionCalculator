package com.co2absorptioncalculator.co2absorptioncalculator;

import com.co2absorptioncalculator.co2absorptioncalculator.service.CalculateService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

import java.util.stream.Stream;

public class CalculateServiceTest {

    private CalculateService calculateService = new CalculateService();
    private static final Double DIVISOR = 10000d;

    private static Stream<Arguments> arguments() {
        return Stream.of(
                Arguments.of(
                        "mature", 5000d, "30-50", "Alder", 1d, "swamp", "present", "lowlands", "woj. suwalskie",
                        188.64
                ),
                Arguments.of(
                        "mature", 10000d, "111-130", "Swamp-oak", 0.5, "dry", "absent", "mountains", "Pasmo wysokich Tatr i Sudetów",
                        10.3635
                )

        );
    }

    @ParameterizedTest
    @MethodSource("arguments")
    public void testCalculate(String forestType, Double area, String age, String habitat, Double degreeOfNaturalness,
                              String soil, String waterReservoir, String land, String location, Double expectedResult) {

            if(forestType.equals("mature")) {
                Double calculation = calculateService.calculate(forestType, area, age, habitat, degreeOfNaturalness, soil, waterReservoir, land, location);
                Assertions.assertEquals(expectedResult, calculation);
            }
        }
}
