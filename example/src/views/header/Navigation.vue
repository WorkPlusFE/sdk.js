<template>
  <div>
    <div class="api-detail">
      <van-panel>
        <div slot="header" class="code-panel van-hairline--bottom">
          <span class="code-panel__title">接口描述</span>
        </div>
        <p class="api-detail__desc">{{ options.description }}</p>
      </van-panel>
      <van-button class="api-detail__exec" type="info" block @click="handleLock">
        锁定头部
      </van-button>
      <van-button class="api-detail__exec" type="default" block @click="handleUnlock">
        解除锁定
      </van-button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop, Watch,
} from 'vue-property-decorator';
import {
  Button, Panel, RadioGroup, Radio, Toast,
} from 'vant';
import * as sdk from '../../../../dist';
import config from '../../api';

@Component({
  name: 'ExampleList',
  components: {
    [Button.name]: Button,
    [Panel.name]: Panel,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
  },
})
export default class ExampleList extends Vue {
  /** props */

  /** data */
  options = {
    title: '锁定网页顶部栏',
    description: '锁定顶部栏，使得顶部栏按钮无效。',
  };

  /** life cycle */
  mounted() {
    sdk.header.setTitle(this.options.title);
  }

  /** method */
  private handleLock(): void {
    sdk.header.navigation.lock();
    Toast.success('顶部栏已锁定');
  }

  private handleUnlock(): void {
    sdk.header.navigation.unlock();
    Toast.success('顶部栏已解锁');
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/detail.scss';
</style>
