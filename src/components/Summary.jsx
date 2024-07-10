/* eslint-disable no-unused-vars */
import { PieChart } from "@mui/x-charts/PieChart";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import arrowUp from "../assets/icons/other/up.svg";
import arrowDown from "../assets/icons/other/down.svg";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

const Summary = () => {
  const { data, isLoading } = useSelector((state) => state?.summary);

  return (
    <div className="overflow-x-auto w-full font-inter">
      <div className="grid grid-cols-12 gap-4 min-w-max">
        {isLoading ? (
          <CircularProgress className="col-span-12 !w-full h-[40px] !flex !justify-center " />
        ) : (
          data?.map((data, index) => (
            <div
              style={{ backgroundColor: data?.color }}
              className={`col-span-2 rounded-[12px] p-[12px] w-[370px]`}
              key={data?._id}
            >
              <div className="!flex !flex-col justify-between h-full w-full gap-4">
                <div className="flex flex-row justify-start items-center gap-[20px] relative">
                  <div className="flex flex-row w-full gap-[8px] items-center">
                    <div className="w-[35px] h-[35px] rounded-[6px] bg-white flex justify-center items-center">
                      <img
                        src={data?.icon}
                        alt={data?.title}
                        className="w-[24px]"
                      />
                    </div>
                    <div className="flex-flex-col whitespace-nowrap">
                      <p className="text-[14px] text-[#101828]">
                        {data?.title}
                      </p>
                      <p className="text-[18px] font-semibold text-[#101828]">
                        {data?.total}
                      </p>
                    </div>
                  </div>

                  {data?.hasPiChart === true && (
                    <div className="absolute top-[-2px] left-[243px]">
                      <PieChart
                        series={[
                          {
                            data: [
                              {
                                value: data?.diseases.copd?.value,
                                color: data?.diseases.copd?.color,
                              },
                              {
                                value: data?.diseases?.tb?.value,
                                color: data?.diseases?.tb?.color,
                              },
                              {
                                value: data?.diseases?.asthma?.value,
                                color: data?.diseases.asthma?.color,
                              },
                            ],
                          },
                        ]}
                        width={200}
                        height={100}
                      />
                    </div>
                  )}
                </div>

                {data?.hasDiseases === true ? (
                  <div className="flex flex-row justify-between w-full">
                    <div className="flex items-start gap-[3.5px]">
                      <div
                        className="w-[8px] h-[8px] rounded-full mt-1"
                        style={{ backgroundColor: data?.diseases?.copd?.color }}
                      />
                      <div className="flex flex-col items-center">
                        <p className="text-[12px] text-[#000000]">COPD</p>
                        <p className="text-[14px]">
                          {data?.diseases?.copd?.value}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-[3.5px]">
                      <div
                        className="w-[8px] h-[8px] rounded-full mt-1"
                        style={{ backgroundColor: data?.diseases?.tb?.color }}
                      />
                      <div className="flex flex-col items-center">
                        <p className="text-[12px] text-[#000000]">TB</p>
                        <p className="text-[14px]">
                          {data?.diseases?.tb?.value}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-[3.5px]">
                      <div
                        className="w-[8px] h-[8px] rounded-full mt-1"
                        style={{
                          backgroundColor: data?.diseases?.asthma?.color,
                        }}
                      />
                      <div className="flex flex-col items-center">
                        <p className="text-[12px] text-[#000000]">ASTHMA</p>
                        <p className="text-[14px]">
                          {data?.diseases?.asthma?.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-row items-center">
                    <div>
                      <div className="flex flex-row">
                        <img
                          src={
                            data?.percentageChange?.changeType === "increase"
                              ? arrowUp
                              : arrowDown
                          }
                          alt="arrow up"
                        />
                        <p
                          className={`${
                            data?.percentageChange?.changeType === "increase"
                              ? "text-[#079455]"
                              : "text-[#D92D20]"
                          } text-[14px] font-medium`}
                        >
                          {data?.percentageChange?.value || 10}%
                        </p>
                      </div>
                      <p className="text-[#475467] text-[14px] font-medium whitespace-nowrap">
                        Last 7 Days
                      </p>
                    </div>
                    <SparkLineChart
                      data={
                        data?.percentageChange?.changeType === "increase"
                          ? [1, 4, 2, 5, 7, 2, 4, 6, 10]
                          : [1, 3, 6, 3, 7, 4, 6, 5, 11].reverse()
                      }
                      colors={[
                        data?.percentageChange?.changeType === "increase"
                          ? "#079455"
                          : "#D92D20",
                      ]}
                      showTooltip
                      height={100}
                    />
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Summary;
