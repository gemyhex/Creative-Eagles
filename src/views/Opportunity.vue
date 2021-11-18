<template>
  <div class="card_wrap">
    <div class="card_content">
      <div class="image">
        <img
          :src="opp.banner"
          :alt="opp.banner_alt"
          :title="opp.banner_title"
        />
      </div>
      <ul>
        <li class="days">
          {{ `${calculateDays(opp.round_end)} days left` }}
        </li>
        <li class="title">
          {{ opp.title }}
        </li>
        <li class="percentage">
          <p>
            <span id="perc"
              >{{
                calcPercentage(opp.investment_goal, opp.current_investment)
              }}%</span
            >
            {{
              calcRemain(opp.investment_goal, opp.current_investment)
                .toFixed(1)
                .replace(/\d(?=(\d{3})+\.)/g, "$&.")
            }}€ left to fund.
          </p>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              :style="{
                width:
                  calcPercentage(opp.investment_goal, opp.current_investment) +
                  '%',
              }"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </li>
        <li class="brief">
          <p>
            {{ opp.teaser }}
          </p>
        </li>
        <li class="status">
          {{ opp.status }}
        </li>

        <hr />

        <li class="count">
          <div class="left">
            <label>{{ `${opp.investor_count}` }}</label>
            <p>Want to invest</p>
          </div>
          <hr />
          <div class="right">
            <label
              >{{
                opp.investment_goal
                  .toFixed(1)
                  .replace(/\d(?=(\d{3})+\.)/g, "$&.")
              }}€</label
            >
            <p>Funding Round</p>
          </div>
        </li>
        <li class="learn">
          <button class="move">Learn More</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    calculateDays(endDate) {
      const date1 = new Date();
      const date2 = new Date(endDate);

      // One day in milliseconds
      const oneDay = 1000 * 60 * 60 * 24;

      // Calculating the time difference between two dates
      const diffInTime = date2.getTime() - date1.getTime();

      // Calculating the no. of days between two dates
      const diffInDays = Math.floor(Math.abs(diffInTime / oneDay));

      return diffInDays;
    },
    calcPercentage(goal, curr) {
      let percentage = 0;
      percentage = (curr * 100) / goal;
      return Math.floor(percentage);
    },
    calcRemain(goal, curr) {
      let diff = 0;
      diff = goal - curr;
      return Math.floor(diff);
    },
  },
  props: {
    opp: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss">
.card_wrap {
  padding: 1rem;
  .card_content {
    background: #fff;
    border-radius: 5px;
    padding-bottom: 1rem;

    .image {
      width: 100%;
      height: 110px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 5px 5px 0px 0px;
      }
    }

    ul {
      padding: 0 15px;
      .days {
        background: #00516c;
        color: #fff;
        width: max-content;
        padding: 5px;
        border-radius: 5px;
        font-weight: 600;
        font-size: 11px;
        margin-top: 8px;
      }

      .title {
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        color: #063847;
      }

      .percentage {
        font-weight: 600;
        font-size: 13px;
        color: #00516c;
        p {
          margin-bottom: 0;
        }
        #perc {
          font-weight: bold;
          font-size: 16px;
          color: #67ae3d;
        }
        .progress {
          height: 5px;
          .progress-bar {
            background: #67ae3d;
          }
        }
      }

      .brief {
        margin-top: 10px;
        p {
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          margin-bottom: 0.5rem;
        }
      }

      .status {
        width: max-content;
        padding: 4px 8px;
        background: #f4f7f9;
        font-weight: 600;
        font-size: 12px;
        text-align: center;
        border-radius: 20px;
        color: #063847;
        text-transform: capitalize;
      }

      hr {
        width: 100%;
        background: #a7a7a7;
        height: 2px;
      }

      .count {
        display: flex;
        text-align: center;
        margin-bottom: 1rem;
        hr {
          transform: rotate(-90deg);
          width: 40px;
        }

        .left,
        .right {
          width: 50%;
          label {
            font-weight: bold;
            font-size: 18px;
            color: #063847;
          }

          p {
            font-weight: 500;
            font-size: 12px;
            color: #00516c;
          }
        }
      }

      .learn {
        .move {
          width: 100%;
          height: 40px;
          background: #063847;
          border-radius: 5px;
          font-weight: 500;
          font-size: 13px;
          color: #ffffff;
          border: 0;

          &:hover {
            background: #052833;
            color: #ffffff;
          }
        }
      }
    }
  }
}
</style>
