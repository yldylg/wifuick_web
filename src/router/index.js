import Vue from 'vue'
import Router from 'vue-router'
//
import MainBoard from '@/components/MainBoard'
// basic
import CaptureMgr from '@/components/basic/CaptureMgr'
import NearbyAP from '@/components/basic/NearbyAP'
import NearbyTerm from '@/components/basic/NearbyTerm'
import NicMgr from '@/components/basic/NicMgr'
import RecordInfo from '@/components/basic/RecordInfo'
import Settings from '@/components/basic/Settings'
// expert
import FakeAP from '@/components/expert/FakeAP'
import FetchCipher from '@/components/expert/FetchCipher'
import KillSession from '@/components/expert/KillSession'
import RestorePkt from '@/components/expert/RestorePkt'
import SoftAP from '@/components/expert/SoftAP'
import WifiScan from '@/components/expert/WifiScan'
// hacker
import AppCtrl from '@/components/hacker/AppCtrl'
import ARPSpoof from '@/components/hacker/ARPSpoof'
import DNSSpoof from '@/components/hacker/DNSSpoof'
import FlowAnalysis from '@/components/hacker/FlowAnalysis'
import ForceDownload from '@/components/hacker/ForceDownload'
import PageCtrl from '@/components/hacker/PageCtrl'
import PrivateInfo from '@/components/hacker/PrivateInfo'
// team
import Location from '@/components/team/Location'
import MakeTeam from '@/components/team/MakeTeam'
import ShareInfo from '@/components/team/ShareInfo'
import TeamChat from '@/components/team/TeamChat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainBoard',
      component: MainBoard
    },
    // basic
    {
      path: '/basic/captrue-mgr',
      name: 'CaptureMgr',
      component: CaptureMgr
    },
    {
      path: '/basic/nearby-ap',
      name: 'NearbyAP',
      component: NearbyAP
    },
    {
      path: '/basic/nearby-term',
      name: 'NearbyTerm',
      component: NearbyTerm
    },
    {
      path: '/basic/nic-mgr',
      name: 'NicMgr',
      component: NicMgr
    },
    {
      path: '/basic/record-info',
      name: 'RecordInfo',
      component: RecordInfo
    },
    {
      path: '/basic/settings',
      name: 'Settings',
      component: Settings
    },
    // expert
    {
      path: '/expert/fake-ap',
      name: 'FakeAP',
      component: FakeAP
    },
    {
      path: '/expert/fetch-cipher',
      name: 'FetchCipher',
      component: FetchCipher
    },
    {
      path: '/expert/kill-session',
      name: 'KillSession',
      component: KillSession
    },
    {
      path: '/expert/restore-pkt',
      name: 'RestorePkt',
      component: RestorePkt
    },
    {
      path: '/expert/soft-ap',
      name: 'SoftAP',
      component: SoftAP
    },
    {
      path: '/expert/wifi-scan',
      name: 'WifiScan',
      component: WifiScan
    },
    // hacker
    {
      path: '/hacker/app-ctrl',
      name: 'AppCtrl',
      component: AppCtrl
    },
    {
      path: '/hacker/arp-spoof',
      name: 'ARPSpoof',
      component: ARPSpoof
    },
    {
      path: '/hacker/dns-spoof',
      name: 'DNSSpoof',
      component: DNSSpoof
    },
    {
      path: '/hacker/flow-analysis',
      name: 'FlowAnalysis',
      component: FlowAnalysis
    },
    {
      path: '/hacker/force-download',
      name: 'ForceDownload',
      component: ForceDownload
    },
    {
      path: '/hacker/page-ctrl',
      name: 'PageCtrl',
      component: PageCtrl
    },
    {
      path: '/hacker/private-info',
      name: 'PrivateInfo',
      component: PrivateInfo
    },
    // team
    {
      path: '/team/location',
      name: 'Location',
      component: Location
    },
    {
      path: '/team/make-team',
      name: 'MakeTeam',
      component: MakeTeam
    },
    {
      path: '/team/share-info',
      name: 'ShareInfo',
      component: ShareInfo
    },
    {
      path: '/team/team-chat',
      name: 'TeamChat',
      component: TeamChat
    }
  ]
})
