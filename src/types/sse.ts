import { User } from './auth';
import { Channel, ContentType } from './channel';

export interface ReadyEvent {
  type: 'ready';
}

export interface UsersSnapshotEvent {
  type: 'users_snapshot';
  users: User[];
  version: number;
}

// todo: check if create_by field exists
export interface UserLog extends Omit<User, 'create_by'> {
  log_id: number;
  action: 'create' | 'update' | 'delete';
}

export interface UsersLogEvent {
  type: 'users_log';
  logs: UserLog[];
}

export interface UserState {
  uid: number;
  online: boolean;
}

export interface UsersStateEvent {
  type: 'users_state';
  users: UserState[];
}

interface UsersStateChangedEvent extends UserState{
  type: 'users_state_changed';
}

interface UserSettingsEvent {
  type: 'user_settings';
  mute_users?: { uid: number; expired_at: number; }[];
  mute_groups?: { gid: number; expired_at: number; }[];
  read_index_users?: { uid: number; mid: number; }[];
  read_index_groups?: { gid: number; mid: number; }[];
  burn_after_reading_users?: { uid: number; expires_in: number; }[];
  burn_after_reading_groups?: { gid: number; expires_in: number; }[];
}

interface UserSettingsChangedEvent {
  type: 'user_settings_changed';
  from_device?: string;
  add_mute_users?: { uid: number; expired_at: number; }[];
  remove_mute_users?: number[];
  add_mute_groups?: { gid: number; expired_at: number; }[];
  remove_mute_groups?: number[];
  read_index_users?: { uid: number; mid: number; }[];
  read_index_groups?: { gid: number; mid: number; }[];
  burn_after_reading_users?: { uid: number; expires_in: number; }[];
  burn_after_reading_groups?: { gid: number; expires_in: number; }[];
}

interface RelatedGroupsEvent {
  type: 'related_groups';
  groups: Channel[];
}

interface ChatEvent {
  type: 'chat';
  mid: number;
  from_uid: number;
  created_at: number;
  target: { uid: number };
  detail: {
    properties: {};
    content: string;
    content_type: ContentType;
    expires_in: number;
    type: 'normal';
  };
}

interface KickEvent {
  type: 'kick';
  reason: string;
}

interface UserJoinedGroupEvent {
  type: 'user_joined_group';
  gid: number;
  uid: number[];
}

interface UserLeavedGroupEvent {
  type: 'user_leaved_group';
  gid: number;
  uid: number[];
}

interface JoinedGroupEvent {
  type: 'joined_group';
  group: Channel;
}

interface KickFromGroupEvent {
  type: 'kick_from_group';
  gid: number;
  reason: string;
}

interface GroupChangedEvent {
  type: 'group_changed';
  gid: number;
  name: string;
  description: string;
  owner: number;
  avatar_updated_at: number;
}

interface PinnedMessageUpdatedEvent {
  type: 'pinned_message_updated';
  gid: number;
  mid: number;
  msg: {
    mid: number;
    created_by: number;
    created_at: number;
    properties: {};
    content: string;
    content_type: ContentType;
  }
}

interface HeartbeatEvent {
  type: 'heartbeat';
  time: number;
}

export type ServerEvent = ReadyEvent |
  UsersSnapshotEvent |
  UsersLogEvent |
  UsersStateEvent |
  UsersStateChangedEvent |
  UserSettingsEvent |
  UserSettingsChangedEvent |
  RelatedGroupsEvent |
  ChatEvent |
  KickEvent |
  UserJoinedGroupEvent |
  UserLeavedGroupEvent |
  JoinedGroupEvent |
  KickFromGroupEvent |
  GroupChangedEvent |
  PinnedMessageUpdatedEvent |
  HeartbeatEvent;